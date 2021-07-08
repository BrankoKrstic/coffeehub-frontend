import aboutPageImage from "./about-page-image.jpg";
import "./About.css";

export default function About() {
	return (
		<div className="About">
			<img
				className="About-image"
				src={aboutPageImage}
				alt="coffee-table-cups"
			/>
			<div className="About-content">
				<h1>Our Story</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Ipsam sequi expedita ratione illum enim ab perspiciatis
					repellendus laboriosam repudiandae dolorum voluptates
					praesentium sunt quia esse quasi pariatur eos vero
					aspernatur veniam eius, omnis, nihil alias. Temporibus
					provident asperiores non aspernatur facilis, enim omnis, ea
					esse hic rerum nam soluta assumenda voluptatem culpa ratione
					deleniti natus autem necessitatibus! Architecto omnis, at
					consectetur exercitationem voluptatibus totam modi
					reprehenderit tempora officia veniam corporis non
					perferendis odit, nobis eum ad inventore similique. Autem
					dolorem dolor aut ab quo sint deserunt sit quod. Ipsam
					assumenda soluta deleniti cum exercitationem, aliquid vitae
					voluptas provident. Ipsum, temporibus?
				</p>
			</div>
		</div>
	);
}
