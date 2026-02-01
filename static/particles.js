const container = document.querySelector(".particles");

for (let i = 0; i < 90; i++) {
    const p = document.createElement("span");
    p.style.position = "absolute";
    p.style.width = "4px";
    p.style.height = "4px";
    p.style.background = "rgba(255,255,255,0.7)";
    p.style.borderRadius = "50%";
    p.style.top = Math.random() * 100 + "%";
    p.style.left = Math.random() * 100 + "%";
    p.style.animation = `float ${6 + Math.random() * 6}s linear infinite`;
    container.appendChild(p);
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
    0% { transform: translateY(0); opacity: 0.8; }
    100% { transform: translateY(-150px); opacity: 0; }
}
`;
document.head.appendChild(style);