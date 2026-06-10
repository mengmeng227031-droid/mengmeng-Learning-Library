const policyModal = document.querySelector("#policyModal");
const policyTitle = document.querySelector("#policyTitle");
const policyBody = document.querySelector("#policyBody");
const formMessage = document.querySelector("#formMessage");
const accountInput = document.querySelector("#phoneInput");
const passwordInput = document.querySelector("#codeInput");
const agreementInput = document.querySelector("#agreementInput");
const phoneLoginForm = document.querySelector("#phoneLoginForm");
const policyButtons = document.querySelectorAll("[data-policy]");
const closePolicyButtons = document.querySelectorAll("[data-close-policy]");
const loginTabs = document.querySelectorAll(".login-tab");

function getSafeReturnTo() {
  const returnTo = new URLSearchParams(window.location.search).get("returnTo");
  if (returnTo && !/^https?:/i.test(returnTo) && !returnTo.startsWith("//")) {
    return returnTo;
  }
  return "./learning.html";
}

const policies = {
  terms: {
    title: "蒙蒙学习库用户协议",
    content: `
      <h3>更新日期：2026年06月07日</h3>
      <p>欢迎使用蒙蒙学习库。您登录或使用本产品，即表示您已阅读、理解并同意本协议。</p>
      <h3>一、服务内容</h3>
      <p>蒙蒙学习库提供课程学习、资料查看、练习记录、学习进度同步等服务。具体功能以页面实际展示为准。</p>
      <h3>二、账号使用</h3>
      <p>账号由平台分配给学生或家长使用。请妥善保管账号和密码，不要转借他人。未成年人使用时，应取得监护人同意。</p>
      <h3>三、内容与权限</h3>
      <p>用户只能访问账号权限范围内的课程、资料和学习记录。未经授权，不得复制、传播或用于商业用途。</p>
      <h3>四、联系我们</h3>
      <p>正式上线前，请补充运营主体、联系方式和争议解决条款。</p>
    `
  },
  privacy: {
    title: "蒙蒙学习库隐私政策",
    content: `
      <h3>更新日期：2026年06月07日</h3>
      <p>蒙蒙学习库重视用户隐私与个人信息保护。本政策说明我们如何处理账号、权限和学习记录。</p>
      <h3>一、收集的信息</h3>
      <p>我们会收集账号信息、手机号后四位、学习进度、练习答案、正确率、学习用时和资料访问记录。</p>
      <h3>二、使用目的</h3>
      <p>相关信息用于登录验证、权限控制、学习进度同步、资料展示、正确率统计和后续学习报告生成。</p>
      <h3>三、未成年人保护</h3>
      <p>本产品面向儿童学习场景。我们会按最小必要原则处理学习数据，并为后续监护人管理预留权限边界。</p>
      <h3>四、数据安全</h3>
      <p>密码仅保存哈希，不保存明文。登录态使用 HttpOnly Cookie。正式上线前，请补充具体隐私联系人和数据处理流程。</p>
    `
  }
};

function setMessage(text, type = "error") {
  formMessage.textContent = text;
  formMessage.classList.toggle("is-success", type === "success");
}

function openPolicy(type) {
  const policy = policies[type];
  if (!policy) return;

  policyTitle.textContent = policy.title;
  policyBody.innerHTML = policy.content;
  policyModal.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
  policyBody.focus();
}

function closePolicy() {
  policyModal.classList.add("is-hidden");
  document.body.style.overflow = "";
}

policyButtons.forEach((button) => {
  button.addEventListener("click", () => openPolicy(button.dataset.policy));
});

closePolicyButtons.forEach((button) => {
  button.addEventListener("click", closePolicy);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !policyModal.classList.contains("is-hidden")) {
    closePolicy();
  }
});

loginTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (!tab.classList.contains("is-active")) {
      setMessage("短信验证码登录后续再接入，当前先使用账号密码登录。");
    }
  });
});

phoneLoginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const account = accountInput.value.trim();
  const password = passwordInput.value;

  if (!agreementInput.checked) {
    setMessage("请先阅读并同意用户协议和隐私政策。");
    agreementInput.focus();
    return;
  }

  if (!account) {
    setMessage("请输入账号或手机号。");
    accountInput.focus();
    return;
  }

  if (!password) {
    setMessage("请输入密码。");
    passwordInput.focus();
    return;
  }

  setMessage("正在登录...", "success");

  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ account, password })
    });
    const data = await response.json().catch(() => ({}));

    if (!response.ok || !data.ok) {
      setMessage(data.error || "登录失败，请检查账号和密码。");
      return;
    }

    setMessage("登录成功，正在进入学习库...", "success");
    window.location.href = getSafeReturnTo();
  } catch (error) {
    setMessage("当前无法连接登录服务，请确认云端 API 已部署。");
  }
});
