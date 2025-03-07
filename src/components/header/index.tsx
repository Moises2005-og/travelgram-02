import logo from "../../assets/travelgram-logo.svg";
import search from "../../assets/search.svg";
import profilePicture from "../../assets/profilePicture.svg";
import airplane from "../../assets/Airplane-icon.svg";
import image from "../../assets/Image-icon.svg";
import location from "../../assets/location-icon.svg";
import { Container } from "../container";
import { useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import { images } from "../../utils/mock";
import { Gallery } from "../gallery";

export function Header() {
  const [open, setOpen] = useState(false);
  const { handleChange, value } = useSearch();

  const filteredImage = images.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <>
      <header className="bg-[#F5F5F5] pb-7 mb-5 relative">
        <Container>
          <div className="flex justify-between items-center py-4 mb-[20px]">
            <div className="flex flex-row-reverse gap-2 items-center cursor-pointer">
              <span className="text-[#EF5F4C] text-[20px] font-bold">Travelgram</span>
              <img src={logo} className="w-[30px]" />
            </div>
            <nav>
              <ul className="flex gap-8 items-center text-[#6C6C6C] relative">
                {open && (
                  <input
                    type="text"
                    onChange={handleChange}
                    value={value}
                    className="absolute top-10 left-[-60%] transform -translate-x-1/2 w-[200px] bg-gray-200 text-black border focus:outline-none rounded p-1 sm:static sm:translate-x-0"
                  />
                )}
                <li className="cursor-pointer">
                  <img src={search} alt="" onClick={() => setOpen(!open)} />
                </li>
                <li className="cursor-pointer sm:block hidden">Explorar</li>
                <li className="cursor-pointer sm:block hidden">Minhas viagens</li>
                <li className="cursor-pointer">
                  <img src={profilePicture} alt="" />
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex sm:flex-row sm:justify-between items-center flex-col">
            <div className="flex sm:flex-row flex-col sm:w-[650px] gap-7 mb-4">
              <img
                src={profilePicture}
                className="sm:w-[800px] w-[200px] object-contain"
              />
              <div>
                <h2 className="sm:text-[32px] font-bold text-[#313131]">
                  Isabela Torres
                </h2>
                <p className="sm:text-[16px] text-[#6C6C6C] leading-7">
                  Amante de viagens, cultura e gastronomia. 🌍✈️ Aqui compartilho as
                  histórias registradas em cada clique, explorando cantinhos
                  fascinantes do nosso planeta a partir da movimentada cidade de São
                  Paulo. 🏙️📸
                </p>
              </div>
            </div>
            <div className="pr-40">
              <ul className="text-[#6C6C6C] flex flex-col gap-5">
                <li className="flex gap-2 items-center">
                  <img src={location} alt="" />São Paulo, Brasil
                </li>
                <li className="flex gap-2 items-center">
                  <img src={airplane} alt="" />37 Países
                </li>
                <li className="flex gap-2 items-center">
                  <img src={image} alt="" />240 fotos
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </header>
      <Gallery data={filteredImage} />
    </>
  );
}
