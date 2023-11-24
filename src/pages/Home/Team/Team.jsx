import SocialLink from "../../Shared/SocialLink";

const Team = () => {
    return (
        <div>
            <div class="mb-10">
                <h1 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900  sm:text-4xl text-center py-10">
                    Get to Know Our Experts
                </h1>
                <div class="flex flex-col items-center md:flex-row justify-center">
                    <div class="p-4">
                        <div class="mb-4 text-center opacity-90">
                            <a href="#" class="relative block">
                                <img alt="profile" src="https://i.ibb.co/cgBk6Cp/Rectangle-2-5.png" class="mx-auto object-cover rounded-full h-40 w-40 " />
                            </a>
                        </div>
                        <div class="text-center">
                            <p class="text-2xl text-gray-800 dark:text-white">
                                Patrick Sebastien
                            </p>
                            <p class="text-xl font-light text-gray-500 dark:text-gray-200">
                                Developpeur
                            </p>
                            <p class="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-400">
                                Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde, is an imitator.
                            </p>
                        </div>
                        <div class="flex items-center justify-between pt-8 gap-2 mx-auto text-gray-500 border-t border-gray-200 w-44">
                            <SocialLink></SocialLink>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="mb-4 text-center opacity-90">
                            <a href="#" class="relative block">
                                <img alt="profile" src="https://i.ibb.co/CwhkFRc/Rectangle-2-3.png" class="mx-auto object-cover rounded-full h-40 w-40 " />
                            </a>
                        </div>
                        <div class="text-center">
                            <p class="text-2xl text-gray-800 dark:text-white">
                                Jean Castux
                            </p>
                            <p class="text-xl font-light text-gray-500 dark:text-gray-200">
                                Founder
                            </p>
                            <p class="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-400">
                                Jean Castux is an imitator, humorist, actor, born November 14, 1953 in Pontivy.
                            </p>
                        </div>
                        <div class="flex items-center justify-between pt-8 mx-auto text-gray-500 gap-3 border-t border-gray-200 w-44">
                            <SocialLink></SocialLink>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="mb-4 text-center opacity-90">
                            <a href="#" class="relative block">
                                <img alt="profil" src="https://i.ibb.co/4Y1w6sP/Rectangle-2-2.png" class="mx-auto object-cover rounded-full h-40 w-40 " />
                            </a>
                        </div>
                        <div class="text-center">
                            <p class="text-2xl text-gray-800 dark:text-white">
                                Thierry Halliday
                            </p>
                            <p class="text-xl font-light text-gray-500 dark:text-gray-200">
                                CTO
                            </p>
                            <p class="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-400">
                                Thierry Halliday, born November 4, 1993 in Saint hilaire de riez, is css specialist.
                            </p>
                        </div>
                        <div class="flex items-center justify-between pt-8 mx-auto text-gray-500 gap-3 border-t border-gray-200 w-44">
                            <SocialLink></SocialLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Team;