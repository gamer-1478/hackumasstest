import Image from "next/image.js";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook, faSquareXTwitter, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div className="Footer">
            <div className="FooterEmailSub">
                <input className="FooterEmailSubInput" placeholder="Enter your email address to be the first to know when applications open!"></input>
                <Image src="/buttonIcon.png" sizes={2000} width={0} height={0} priority={true} />
            </div>
            <div className="FooterSocials">
                <Link
                    rel="noopener noreferrer" target="_blank"
                    smooth="true"
                    href="https://www.facebook.com/HackUMass/"
                    className="social-links"
                >
                    <FontAwesomeIcon icon={faSquareEnvelope} />
                </Link>

                <Link
                    smooth="true"
                    rel="noopener noreferrer" target="_blank"
                    href="https://www.facebook.com/HackUMass/"
                    className="social-links"
                >
                    <FontAwesomeIcon icon={faSquareFacebook} />
                </Link>
                <Link
                    smooth="true"
                    rel="noopener noreferrer" target="_blank"
                    href="https://www.facebook.com/HackUMass/"
                    className="social-links"
                >
                    <FontAwesomeIcon icon={faSquareXTwitter} />
                </Link>
                <Link
                    smooth="true"
                    rel="noopener noreferrer" target="_blank"
                    href="https://www.facebook.com/HackUMass/"
                    className="social-links"
                >
                    <FontAwesomeIcon icon={faSquareInstagram} />
                </Link>
            </div>
            <div className="FooterContent">
                <div className="FooterContentLeft">
                    <p>HackUMass XII</p>
                    <p>Why HackUMass</p>
                    <p style={{ marginBottom: "0" }}>Sponsors</p>
                </div>
                <Image src="/FullBlueLogo.png" sizes={2000} width={0} height={0} priority={true} />
                <div className="FooterContentRight">
                    <p>FAQ</p>
                    <p>Team</p>
                    <p style={{ marginBottom: "0" }}>Contact Us</p>
                </div>
            </div>
        </div>
    )
}