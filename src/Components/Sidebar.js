import { Typography } from "@material-tailwind/react";
import "./Sidebar.css";
import TaskClasses from "./TaskClasses";
import MomentaryTask from "./Tasks/UI/MomentaryTask";
import MomentaryTaskProvider from "./Tasks/UI/MomentaryTaskProvider";
const Sidebar = (props) => {
	const sideBarItems = [
		{
			title: "All Tasks",
			color: "fill-yellow-900",
		},
		{
			title: "For Today",
			color: "fill-navy-900",
		},
		{
			title: "Priorities",
			color: "fill-red-900",
		},
		{
			title: "Completed",
			color: "fill-green-900",
		},
	];
	const displaySelectedTasks = (title) => {
		props.onSelection(title);
	};

	return (
		<div className="w-1/4 lg:w-1/6 bg-cyan-900 min-h-screen h-content relative pl-6 pt-32">
			{sideBarItems.map((sideBarItem, index) => (
				<TaskClasses
					key={index}
					title={sideBarItem.title}
					color={sideBarItem.color}
					onClick={displaySelectedTasks}
				/>
			))}
				<MomentaryTask />
		</div>
	);
};
export default Sidebar;
