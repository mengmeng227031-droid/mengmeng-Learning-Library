create extension if not exists pgcrypto;

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  username text unique not null,
  password_hash text not null,
  phone_hash text unique,
  phone_last4 text,
  display_name text not null,
  role text not null default 'student' check (role in ('student', 'teacher', 'admin')),
  status text not null default 'active' check (status in ('active', 'disabled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists permissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  resource_type text not null check (resource_type in ('course', 'unit', 'file', 'feature')),
  resource_id text not null,
  permission text not null check (permission in ('view', 'study', 'manage')),
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  unique (user_id, resource_type, resource_id, permission)
);

create table if not exists resources (
  id text primary key,
  title text not null,
  resource_type text not null check (resource_type in ('file', 'course', 'unit', 'lesson')),
  subject text not null,
  course_id text,
  grade text,
  semester text,
  category text,
  file_url text,
  visible boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists learning_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  subject text not null,
  course_id text not null,
  unit_id text not null,
  lesson_id text,
  progress_percent integer not null default 0 check (progress_percent between 0 and 100),
  status text not null default 'not_started' check (status in ('not_started', 'learning', 'completed')),
  last_position jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists practice_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  subject text not null,
  course_id text not null,
  unit_id text not null,
  lesson_id text,
  activity_id text not null,
  question_id text not null,
  answer jsonb not null default '{}'::jsonb,
  is_correct boolean not null,
  score numeric(6,2) not null default 0,
  duration_sec integer not null default 0 check (duration_sec >= 0),
  answered_at timestamptz not null default now()
);

create table if not exists learning_reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  period_start date not null,
  period_end date not null,
  summary_json jsonb not null,
  generated_at timestamptz not null default now()
);

create table if not exists sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  token_hash text unique not null,
  expires_at timestamptz not null,
  created_at timestamptz not null default now()
);

create index if not exists idx_permissions_user on permissions(user_id);
create index if not exists idx_resources_lookup on resources(subject, course_id, grade, semester, visible, sort_order);
create index if not exists idx_learning_progress_user on learning_progress(user_id, updated_at desc);
create unique index if not exists idx_learning_progress_unique_item
  on learning_progress(user_id, subject, course_id, unit_id, coalesce(lesson_id, ''));
create index if not exists idx_practice_attempts_user on practice_attempts(user_id, answered_at desc);
create index if not exists idx_sessions_token on sessions(token_hash);
