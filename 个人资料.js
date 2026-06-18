// 获取页面元素
const usernameEl = document.querySelector(".username");
const signatureEl = document.querySelector(".signature");

// 点击编辑按钮
editBtn.addEventListener("click", () => {
    // 弹出输入框，获取新用户名
    const newName = prompt("请输入新用户名：", usernameEl.textContent);
    if (newName && newName.trim() !== "") {
        usernameEl.textContent = newName;
    }
    // 新个性签名
    const newSig = prompt("请输入新个性签名：", signatureEl.textContent);
    if (newSig !== null) {
        signatureEl.textContent = newSig;
    }

});