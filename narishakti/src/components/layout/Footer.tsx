import Link from "next/link";
import { FaAt, FaFacebookF, FaInstagram } from "react-icons/fa6";

const quickLinks = ["About Us", "Success Stories", "Course Catalog", "Partner With Us"] as const;
const supportLinks = ["Help Center", "Health Resources", "Privacy Policy", "Terms of Service"] as const;

export function Footer() {
	return (
		<footer className="bg-[#071739] text-white">
			<div className="mx-auto w-full max-w-345 px-5 py-14 md:px-8">
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
					<div>
						<div className="flex items-center gap-3">
							<span className="grid h-7 w-7 place-items-center rounded-md bg-(--primary) text-xs font-bold">♀</span>
							<h3 className="text-3xl font-semibold tracking-tight">NariShakti</h3>
						</div>
						<p className="mt-5 max-w-70 text-base leading-relaxed text-[#9db0cf]">
							Dedicated to creating a future where every woman in Nepal has the resources to achieve her dreams.
						</p>
						<div className="mt-6 flex items-center gap-3">
							<a
								href="#"
								aria-label="Facebook"
								className="grid h-10 w-10 place-items-center rounded-full bg-[#1d2d4f] text-[#e7eefc] transition hover:bg-[#273a63]"
							>
								<FaFacebookF className="text-sm" />
							</a>
							<a
								href="#"
								aria-label="Instagram"
								className="grid h-10 w-10 place-items-center rounded-full bg-[#1d2d4f] text-[#e7eefc] transition hover:bg-[#273a63]"
							>
								<FaInstagram className="text-sm" />
							</a>
							<a
								href="#"
								aria-label="Contact"
								className="grid h-10 w-10 place-items-center rounded-full bg-[#1d2d4f] text-[#e7eefc] transition hover:bg-[#273a63]"
							>
								<FaAt className="text-sm" />
							</a>
						</div>
					</div>

					<div>
						<h4 className="text-2xl font-semibold">Quick Links</h4>
						<ul className="mt-5 space-y-3">
							{quickLinks.map((item) => (
								<li key={item}>
									<Link href="#" className="text-lg text-[#9db0cf] no-underline transition hover:text-white">
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-2xl font-semibold">Support</h4>
						<ul className="mt-5 space-y-3">
							{supportLinks.map((item) => (
								<li key={item}>
									<Link href="#" className="text-lg text-[#9db0cf] no-underline transition hover:text-white">
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-2xl font-semibold">Newsletter</h4>
						<p className="mt-5 max-w-70 text-base leading-relaxed text-[#9db0cf]">
							Stay updated with the latest opportunities and stories.
						</p>
						<div className="mt-5 space-y-3">
							<input
								type="email"
								placeholder="Your Email"
								className="w-full rounded-2xl border border-[#1d2d4f] bg-[#1d2d4f] px-4 py-3 text-base text-white placeholder:text-[#6f84a8] focus:border-[#4d6796] focus:outline-none"
							/>
							<button
								type="button"
								className="w-full rounded-2xl bg-(--primary) px-5 py-3 text-base font-semibold text-white transition hover:bg-(--primary-hover)"
							>
								Subscribe
							</button>
						</div>
					</div>
				</div>

				<div className="mt-12 border-t border-[#1b2e51] pt-6">
					<div className="flex flex-col gap-2 text-sm text-[#8ea1c3] md:flex-row md:items-center md:justify-between">
						<p>© 2024 NariShakti Nepal. All rights reserved.</p>
						<p className="text-[#9db0cf]">
							<span className="mr-1 text-(--primary)">♥</span>
							Kathmandu, Nepal
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
