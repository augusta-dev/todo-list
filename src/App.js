import { useState, useEffect } from "react";
import "./App.css";
import ComplexNavbar from "./Components/ComplexNavbar";
import Sidebar from "./Components/Sidebar";
import TaskDisplay from "./Components/Tasks/TaskDisplay";
import MomentaryTaskProvider from "./Components/Tasks/UI/MomentaryTaskProvider";

function App(props) {
	// const setLocalStorage = () => {
	// 	localStorage.setItem("tasksList", "entered_tasks");
	// }
	// useEffect(() => {
	// 	setLocalStorage();
	// }, [])
	// let tasksList = localStorage.getItem("tasksList");
	const [selectedTasks, setSelectedTasks] = useState("");
	// if (tasksList === "entered_tasks") {
	return (
		<div className="main h-screen w-screen">
			<img
				src="./Assets/Background.jpg"
				alt=""
			/>
			<div className="w-full absolute z-10">
				<ComplexNavbar />
			</div>
			<MomentaryTaskProvider>
				<div className="flex w-screen flex-wrap content-center justify-center h-auto">
					<Sidebar onSelection={setSelectedTasks} />
					<TaskDisplay
						className="w-3/4 lg:w-5/6  pl-5 pr-6 pt-28"
						onDisplay={selectedTasks}
					/>
					
				</div>
			</MomentaryTaskProvider>
		</div>
	);
	// }
}

export default App;
