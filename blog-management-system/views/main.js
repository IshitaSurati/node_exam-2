const postData = async (blog) => {
    try {
        let req = await fetch("http://localhost:8090/Blogs", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        });
        if (req.ok) {
            let res = await req.json();
            console.log(res);
            alert("Blog added successfully!");
            getBlog();
        } else {
            console.error(`Error: ${req.status} - ${req.statusText}`);
            alert("Failed to add blog");
        }
    } catch (error) {
        console.error('Request failed', error);
        alert("Failed to add blog due to a network or server issue.");
    }
};

const handleData = (e) => {
    e.preventDefault();
    let blog = {
        title: document.getElementById('title').value,
        content: document.getElementById('content').value,
        img: document.getElementById('img').value,
        userId: userId
    };
    postData(blog);
};

document.getElementById("BlogData").addEventListener("submit", handleData);

const mapper = (data) => {
    document.getElementById("blogList").innerHTML = "";

    data.map((ele) => {
        let div = document.createElement("div");

        let title = document.createElement("h1");
        title.innerHTML = ele.title;
        div.appendChild(title);

        let content = document.createElement("p");
        content.innerHTML = ele.content;
        div.appendChild(content);

        if (ele.img) {
            let img = document.createElement("img");
            img.src = ele.img;
            div.appendChild(img);
        }

        document.getElementById("blogList").appendChild(div);
    });
};

const getBlog = async () => {
    try {
        let req = await fetch("http://localhost:8090/Blogs");
        if (req.ok) {
            let res = await req.json();
            mapper(res);
        } else {
            console.error(`Error: ${req.status} - ${req.statusText}`);
            alert("Failed to load blogs");
        }
    } catch (error) {
        console.error('Request failed', error);
        alert("Failed to load blogs due to a network or server issue.");
    }
};

getBlog();
