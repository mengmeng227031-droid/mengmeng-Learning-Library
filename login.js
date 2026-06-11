const policyModal = document.querySelector("#policyModal");
const policyTitle = document.querySelector("#policyTitle");
const policyBody = document.querySelector("#policyBody");
const formMessage = document.querySelector("#formMessage");
const phoneInput = document.querySelector("#phoneInput");
const codeInput = document.querySelector("#codeInput");
const agreementInput = document.querySelector("#agreementInput");
const sendCodeButton = document.querySelector("#sendCodeButton");
const phoneLoginForm = document.querySelector("#phoneLoginForm");
const policyButtons = document.querySelectorAll("[data-policy]");
const closePolicyButtons = document.querySelectorAll("[data-close-policy]");
const loginTabs = document.querySelectorAll(".login-tab");

const policies = {
  terms: {
    title: "蒙蒙学习库用户协议",
    content: `
      <h3>更新日期：2026年06月07日</h3>
      <p>欢迎使用蒙蒙学习库。请您在注册、登录或使用本产品前，仔细阅读并理解本协议。您点击同意或继续使用服务，即表示您已阅读、理解并接受本协议。</p>

      <h3>一、服务内容</h3>
      <p>蒙蒙学习库为学生、家长及教学管理场景提供课程学习、资料查看、学习记录、练习工具等服务。具体功能以页面实际展示及后续版本开放范围为准。</p>

      <h3>二、账号使用</h3>
      <ul>
        <li>您应使用真实、有效的手机号完成登录或注册，并妥善保管验证码及账号信息。</li>
        <li>未成年人使用本产品时，应在监护人知情并同意的前提下进行。</li>
        <li>同一账号下的学习记录、课程进度和资料权限，后续将根据账号身份和数据库权限规则展示。</li>
      </ul>

      <h3>三、用户行为规范</h3>
      <p>您不得利用本产品发布、上传、传播违法违规内容，不得攻击、干扰、绕过系统权限或影响其他用户正常使用。因违规行为造成损失的，您应自行承担相应责任。</p>

      <h3>四、内容与知识产权</h3>
      <p>产品中的品牌、界面、素材、课程结构、学习资料及相关内容，除法律另有规定或另有授权外，归蒙蒙学习库或相应权利人所有。未经授权，不得复制、传播、改编或用于商业用途。</p>

      <h3>五、服务变更与中止</h3>
      <p>为了改善学习体验或满足安全、合规要求，我们可能对功能、内容或服务规则进行调整。涉及重要权益的变更，将以合理方式提示用户。</p>

      <h3>六、免责声明</h3>
      <p>本产品会尽力保障服务稳定与内容准确，但学习结果受个人基础、使用频率、学习方法等因素影响，不承诺特定成绩或升学结果。</p>

      <h3>七、联系我们</h3>
      <p>如您对本协议或账号使用有疑问，可通过产品后续公布的客服入口与我们联系。正式上线前，请补充运营主体名称、联系方式和争议解决条款。</p>
    `
  },
  privacy: {
    title: "蒙蒙学习库隐私政策",
    content: `
      <h3>更新日期：2026年06月07日</h3>
      <p>蒙蒙学习库重视用户隐私与个人信息保护。本政策说明我们在您使用产品时如何收集、使用、存储和保护相关信息。</p>

      <h3>一、我们收集的信息</h3>
      <ul>
        <li>账号信息：手机号、验证码登录状态、昵称或学生身份信息。</li>
        <li>学习信息：课程进度、练习记录、最近学习内容、资料访问记录。</li>
        <li>设备与日志信息：为保障安全和排查问题，可能记录设备类型、浏览器信息、访问时间和基础日志。</li>
      </ul>

      <h3>二、我们如何使用信息</h3>
      <p>我们会将信息用于账号登录、身份识别、学习内容推荐、学习记录同步、资料权限控制、产品安全保障和服务体验优化。</p>

      <h3>三、未成年人保护</h3>
      <p>本产品面向儿童学习场景。未成年人使用前应取得监护人同意。我们会按照最小必要原则处理未成年人信息，并在后续账号体系中预留监护人确认、权限控制和数据管理能力。</p>

      <h3>四、信息共享与委托处理</h3>
      <p>除法律法规要求、获得您或监护人同意、完成短信验证等必要服务外，我们不会向无关第三方出售或非法提供您的个人信息。涉及短信、存储、统计等第三方服务时，将要求其按约定保护数据安全。</p>

      <h3>五、信息存储与安全</h3>
      <p>我们会采取合理的技术和管理措施保护个人信息，包括权限控制、传输保护、日志审计和最小化访问。正式接入数据库后，应按账号、角色和数据权限边界进行隔离。</p>

      <h3>六、您的权利</h3>
      <p>您可以依法查询、更正、删除个人信息，或撤回授权、注销账号。相关入口将在后续账号系统中提供；上线前请补充具体处理流程。</p>

      <h3>七、政策更新</h3>
      <p>当产品功能、数据处理方式或法律要求发生变化时，我们可能更新本政策。重要变更将通过页面提示、弹窗或其他合理方式告知。</p>
    `
  }
};

let codeTimer = null;
let remainingSeconds = 0;

function setMessage(text, type = "error") {
  formMessage.textContent = text;
  formMessage.classList.toggle("is-success", type === "success");
}

function isValidPhone(value) {
  return /^1[3-9]\d{9}$/.test(value);
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

function startCodeCountdown() {
  remainingSeconds = 60;
  sendCodeButton.disabled = true;
  sendCodeButton.textContent = `${remainingSeconds}s后重发`;

  codeTimer = window.setInterval(() => {
    remainingSeconds -= 1;
    sendCodeButton.textContent = `${remainingSeconds}s后重发`;

    if (remainingSeconds <= 0) {
      window.clearInterval(codeTimer);
      codeTimer = null;
      sendCodeButton.disabled = false;
      sendCodeButton.textContent = "发送验证码";
    }
  }, 1000);
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
      setMessage("二维码登录稍后开放，当前请使用手机号登录。");
    }
  });
});

sendCodeButton.addEventListener("click", () => {
  const phone = phoneInput.value.trim();

  if (!isValidPhone(phone)) {
    setMessage("请输入正确的11位手机号。");
    phoneInput.focus();
    return;
  }

  setMessage("验证码发送流程稍后接入，当前为界面演示。", "success");
  startCodeCountdown();
  codeInput.focus();
});

phoneLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const phone = phoneInput.value.trim();
  const code = codeInput.value.trim();

  if (!agreementInput.checked) {
    setMessage("请先阅读并同意用户协议和隐私政策。");
    agreementInput.focus();
    return;
  }

  if (!isValidPhone(phone)) {
    setMessage("请输入正确的11位手机号。");
    phoneInput.focus();
    return;
  }

  if (!/^\d{4,6}$/.test(code)) {
    setMessage("请输入4到6位数字验证码。");
    codeInput.focus();
    return;
  }

  setMessage("登录程序稍后接入，当前已完成前端校验。", "success");
});
