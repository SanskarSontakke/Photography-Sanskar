
export default function Footer() {
    return (
        <footer id="contact" className="py-16 bg-zinc-900 text-white text-center">
            <h2 className="text-3xl md:text-5xl font-oswald font-bold uppercase mb-8">
                Let's Create Together
            </h2>

            <div className="flex flex-col md:flex-row justify-center gap-8 mb-12 text-gray-400">
                <p>hello@sanskarsontakke.com</p>
                <p>+91 987 654 3210</p>
                <p>Mumbai, India</p>
            </div>

            <div className="text-xs text-zinc-600 uppercase tracking-widest">
                © {new Date().getFullYear()} Sanskar Sontakke Photography. All Rights Reserved.
            </div>
        </footer>
    );
}
