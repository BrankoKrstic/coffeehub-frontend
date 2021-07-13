import NavbarLinks from "../NavbarLinks/NavbarLinks";
import Modal from "../../../UI/Modal/Modal";
import "./Sidebar.css";

export default function Sidebar(props) {
	const { open, toggleSidebarOpen } = props;
	return (
		<>
			<Modal clicked={toggleSidebarOpen} showing={open}>
				<div className={`Sidebar ${open && "Sidebar-open"}`}>
					<NavbarLinks />
				</div>
			</Modal>
		</>
	);
}
