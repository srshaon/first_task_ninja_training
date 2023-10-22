
const root2 = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { className: "wrapper" },
    [
        React.createElement("div", { className: "parent" }, [
            React.createElement("h2", { className: "parent-title" }, "I am Parent"),
            React.createElement("p", {}, "Barir Korta")
        ]),
        React.createElement("div", { className: "parent-two" }, [
            React.createElement("h2", { className: "parent-title" }, "I am Parent two"),
            React.createElement("p", {}, "Ami o Barir Korta")
        ])


    ]
);
root2.render(parent);
