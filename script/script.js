const emojiImage = document.getElementById("emoji-image");
const emojiMap = {
    1: "img/angry.png",
    2: "img/angry.png",
    3: "img/sad.png",
    4: "img/sad.png",
    5: "img/neutral.png",
    6: "img/neutral.png",
    7: "img/satisfied.png",
    8: "img/satisfied.png",
    9: "img/happy.png",
    10: "img/happy.png"
};

document.querySelectorAll('input[name="nota"]').forEach(input => {
    input.addEventListener("change", () => {
        const selectedId = input.id;
        const nota = selectedId.split("-")[1];
        const emojiUrl = emojiMap[nota];
        if (emojiUrl) {
            emojiImage.src = emojiUrl;
        }
    });
});