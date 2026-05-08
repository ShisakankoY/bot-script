const chatBox = {
    "ai": [],
    "user": []
};

function bs(code) {
    const line = code.split("\n");
    let i = 0;

    while (i < line.length) {
        const newLine = line[i].split(" ");
        const com = newLine[0];
        const rest = newLine.slice(1);

        if (com === "uc") {
            chatBox["user"].push(rest.join(" "));
        }
        if (com === "ac") {
            chatBox["ai"].push(rest.join(" "));
        }
        if (com === "log") {
            console.log(chatBox);
        }

        i++;
    }
    return chatBox;
}