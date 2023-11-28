
const Button = ({title}) => {
    return (
        <>
            <button class="inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]">
                {title}
            </button>
        </>
    );
};

export default Button;