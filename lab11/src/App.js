import './App.css';
import Hierarchy from "./Hierarchy.js";

function App() {
    const hierarchy = [{
        id: 1,
        name: "University",
        icon: "/icons/1.ico",
        childs: [{
            id: 2,
            name: "4-ый сем",
            icon: "/icons/BlackFolder.png",
            onClick: function (id) {
                console.log(id);
            },
            childs: [{
                id: "1",
                name: "Another_Cool_Photo.png",
                icon: "/icons/image.png",
                onClick: function (id) {
                    console.log(id);
                }
            }]
        }]
    },

    {
        id: 3,
        name: "Мои файлы",
        icon: "/icons/BlackFolder.png",
        childs: [{
            id: 4,
            name: "Загрузки",
            icon: "/icons/BlackFolder.png",
            childs: [{
                id: 5,
                name: "Another_Cool_Video.mp4",
                icon: "/icons/video.png",
                onClick: function (id) {
                    console.log(id);
                }
            },
            {
                id: 6,
                name: "Another_Cool_Song2.mp3",
                icon: "/icons/music (1).png",
                onClick: function (id) {
                    console.log(id);
                }
            }
            
            
            ]
        }]
    },

    {
        id: 7,
        name: "Folder 3",
        icon: "/icons/BlackFolder.png",
        childs: [
            {
                id: 8,
                name: "Folder 4",
                icon: "/icons/BlackFolder.png"
            },
            {
                id: 9,
                name: "Folder 5",
                icon: "/icons/BlackFolder.png"
            }
        ]
    },


    ];

    return (
        <div className="App">
            <Hierarchy tree={hierarchy} />
        </div>
    );
}

export default App;
