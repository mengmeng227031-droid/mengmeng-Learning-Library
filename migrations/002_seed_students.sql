-- Seed 20 student accounts without phone numbers.
-- Plain initial passwords are intentionally not committed.
insert into users (username, password_hash, phone_hash, phone_last4, display_name, role, status)
values
  ('student001', 'scrypt$08813c4bdc628e2237c05029002f3440$45eb3ea5ee9ce144221378b3a7033fd3cc3e76b9461d910728efed20fca9d5c0304e42f7707524ea7d91d43f62d7dbeea9bd4f8bfb7941e4017be7d5a4249e97', null, null, 'Student 01', 'student', 'active'),
  ('student002', 'scrypt$307c5f50134782787f12a52066244b80$95e3d418ba12683bf51d3bfd5bb9062aee4db9eda2d675615440301dc9a44f6eebd67dc51ccd3eb878ef4ee96c262fd31581c6bee826c48e5d95af41f4045c64', null, null, 'Student 02', 'student', 'active'),
  ('student003', 'scrypt$6a93909b20a73376d70f07f26ca5cc68$91c4e3c1044fdf26a9b4a2c73f897e76283e3dd23df3d6641db1d6007b5f8b617b8cc273cc21917c08b8767ba480e85dbff27d7d568fd7cd165419e97a4e3a8e', null, null, 'Student 03', 'student', 'active'),
  ('student004', 'scrypt$70fb0664d22c506bc5bf7d631d1eff77$a42997a174fe1b651ea5ff6a637d8d05ba5baa05432b45deb3bc3520a193ffd3fe0b4b2f81eea7ff589e66c847ce6ff98229c237a0a7895ea4688469b21fa01b', null, null, 'Student 04', 'student', 'active'),
  ('student005', 'scrypt$56ffea4cfecabd242468abd3d4897797$c15db507bcb3143581f86e015446a4fc7b7a51a9464f38e6320ad50959fe0b386e855824648c03333eed0a3f878a1f37997f3071668fde5163de00b1a1c867bf', null, null, 'Student 05', 'student', 'active'),
  ('student006', 'scrypt$06e84bb4b93086b28ff3b15467400bdc$74e3afbf929e938524fcf450660fda4874b6102f8d561422e5b2e27f8ce8f8b61a45951931fae78a38218327bc75c302884503347a4cbc2512a1935ab974920b', null, null, 'Student 06', 'student', 'active'),
  ('student007', 'scrypt$f8b7c46a47b735aa1ac036a1d377b76a$14a027324666efd4bcd7956dcf74eaad8cca671974f18dcc1fb3ae20d32943f7458441d105f9d622b83fc6b3c74f40c7c174204afbb58f10516272fab9e6b196', null, null, 'Student 07', 'student', 'active'),
  ('student008', 'scrypt$2cf32567c669fb5abbc1cb8bfd928880$61a087ac6d7535642d4acec7210dccf564b9614f5e0fc3cc838e143e4c525c32ea42eea61283b8cbeace367619a34daf5d32b689232a31b78055a9ea3c14c2ca', null, null, 'Student 08', 'student', 'active'),
  ('student009', 'scrypt$ae3afe0c4c3f8d9b2d5c8d59e81c6e7a$6aea7cd881360238d8962c5d2f4b64b98fbcc72f7a180f85a7c850915e3b9d994f2eb57e8780dd42fa417ee063d9ea314299201ad8550c23b7777eb5769ff0bc', null, null, 'Student 09', 'student', 'active'),
  ('student010', 'scrypt$d1690d1180b74c7a83797e4fa85e366e$dbfdbaf57d7c5c8a58c19521049980de5c5d992e4ac4a963a45c8e9aa6435ba607fb1114174118b322702be0cb0d652f3d9f3c8ac0eb65a9d54de0ce8b962bdf', null, null, 'Student 10', 'student', 'active'),
  ('student011', 'scrypt$e4cceeca50c6a04e77139a767fac4166$5721013ae7a66e1d4cdf2028deb460606e3d864019570924ab26564b66d6d5cd001d2531ce79dcaace204b9aeb77c6abe594ace87e22fd4afc271cef549bb43d', null, null, 'Student 11', 'student', 'active'),
  ('student012', 'scrypt$5a3db7dc14e2bf3ec370bdbb10ae6154$851d2d620837d8ba1dfa8e6db585dda22dd7d9c5ccce9f4c709b486e21d941cfd4f7b9f3e6e77d503d3e44c527076d198f5aad0bc43154044ba55f20eb3b15ff', null, null, 'Student 12', 'student', 'active'),
  ('student013', 'scrypt$8affcf5ad1e3c6ca40581a1630876e4d$f02fc6aaaa90589c1a4bcf64a3afd07aa8ec06b384e0dcf4597b451ef1a3d7c46aea0f3d871c43aa4109d764f16a7333da5b6a309760a32f0c19535c08a5a0ca', null, null, 'Student 13', 'student', 'active'),
  ('student014', 'scrypt$7350b02f29c27b13cd2771535c365fe6$b0d756432a247b629273481150df724d4667401fb443da5d65bd4d3b649e81644808eea6d7b882ee16569da2201dc40339a2c64eaf7fbda2e2ea40132e9813d6', null, null, 'Student 14', 'student', 'active'),
  ('student015', 'scrypt$76b6a18152af8d13c35c8b89fe39bccf$0463b24965fed353056c76a19acb0804b4153e498229f568909bc8b0fa4a3004ce248805729f0c8a1a66bed9a5693a4524f56e6569d80898a56659e7a5d94374', null, null, 'Student 15', 'student', 'active'),
  ('student016', 'scrypt$e8f2194736ebc600f6e01c8f4b35c0a6$acda39ff4a3868b3e9f216eee6c03e3b82aee9f38bc110b23f90302fbfd718f08a52761f41204af65f176eadfb014cf200e573a2935afe1f19df9f21a2272673', null, null, 'Student 16', 'student', 'active'),
  ('student017', 'scrypt$ed238bce330df5f72fdc1a004bb2b768$b05d34f73c5e37704456801091d1a557e59f9ee376078e647e6fd9711c88cebfd5e7b885e0c186f8e8c85b9c69c86043dded0da1730ff3b84bd33c148a5298dc', null, null, 'Student 17', 'student', 'active'),
  ('student018', 'scrypt$264484a997a225fd6b3f530cf7975d66$7e5f170c5acd74387f2e3e021a5bf59f90008ffcbc0106f2169250d13a04980bdf3790fb2d8e1151e015362b40d319401a76da84261ffb76a59183cf7baa27ef', null, null, 'Student 18', 'student', 'active'),
  ('student019', 'scrypt$c925e898aacc610acc3ae82f1ccc15c6$16c0544514ceda8dc5f1482dfe55ce2671b4312be304dc588c911ffa70cf47dc29ebdeb3d3d3a400d1676b5af6bc3c49f34c15f3d71d3087a9178da9147aea81', null, null, 'Student 19', 'student', 'active'),
  ('student020', 'scrypt$c347835b3a245538223a6775b359ee9a$dca92149e144ad3c1d43c1a50c9771be52552fc6f58bcb8ca9d760060d24eca80410b8fc77602c3dbbfa76379bf6837e5f6a2c1ce5d9c99212712b1dfd5d6e87', null, null, 'Student 20', 'student', 'active')
on conflict (username) do update set
  password_hash = excluded.password_hash,
  phone_hash = excluded.phone_hash,
  phone_last4 = excluded.phone_last4,
  display_name = excluded.display_name,
  role = excluded.role,
  status = 'active',
  updated_at = now();
