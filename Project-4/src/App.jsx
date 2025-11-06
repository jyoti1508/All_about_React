import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

function App() {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1976",
      intro: "",
      color: "royalblue",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769142198-430b0b651fe4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro: "",
      color: "orange",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1672819029116-e245d9b3877a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
      intro: "",
      color: "lightseagreen",
      tag: "Underbanked",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661660084694-68f8eadf15e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      intro: "",
      color: "yellow",
      tag: "Underoffice",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      intro: "",
      color: "seagreen",
      tag: "Tracking",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661598004055-33c8874db9d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      intro: "",
      color: "purple",
      tag: "UValid",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661600558982-b52f4764f8c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      intro: "",
      color: "skyblue",
      tag: "Progress",
    },
  ];
  return (
    <>
      <Section1 users={users} />
      <Section2 />
    </>
  );
}

export default App;
