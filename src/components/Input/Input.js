import "./Input.css";

export default function Input(props) {
	return (
		<input
			className="Input"
			type={props.type}
			name={props.name}
			id={props.id}
			placeholder={props.placeholder}
			onChange={props.updateForm}
			required={props.required}
		/>
	);
}
