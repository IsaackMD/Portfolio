import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import '../output.css';
import '../styles/Navbar.css';


export const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ActiveLink, setIsActiveLink] = useState("Inicio");

  const menuItems = [
    "Inicio",
    "Experiencias",
    "Proyectos",
    "Conocimientos",
    "Logros"
  ];

  const handleLinkClick = (item) => {
    setIsActiveLink(item);
  }
  

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="bg-[#161616b5] justify-around text-white" >
      <NavbarContent className="sm:hidden text-white" justify="start" >
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={ActiveLink === "Inicio"}>
          <Link color={ActiveLink === "Inicio" ? "warning" : "defaul"} href="#Inicio" justify="center" onClick={() => handleLinkClick("Inicio")}>
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive={ActiveLink === "Experiencias"}>
          <Link color={ActiveLink === "Experiencias" ? "warning" : "white"} aria-current="page" href="#Experiencias" onClick={() => handleLinkClick("Experiencias")}>
            Experiencias
          </Link>
        </NavbarItem>
        <NavbarItem isActive={ActiveLink === "Proyectos"}>
          <Link color={ActiveLink === "Proyectos" ? "warning" : "white"} aria-current="page" href="#Proyectos" onClick={() => handleLinkClick("Proyectos")}>
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color={ActiveLink === "Conocimientos" ? "warning" : "white"} href="#Conocimientos" onClick={() => handleLinkClick("Conocimientos")}>
            Conocimientos
          </Link>
        </NavbarItem>
        <NavbarItem isActive={ActiveLink === "Logros"}>
          <Link color={ActiveLink === "Logros" ? "warning" : "white"} aria-current="page" href="#Logros" onClick={() => handleLinkClick("Logros")}>
            Logros
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="sm:flex sm:py-6 bg-transparent lg:hidden"  style={{padding: "15px 20px"}}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} isActive={ActiveLink === item}>
            <Link
              className="w-full"
              color={ActiveLink === item ? "warning" : "white"}
              href={`#${item}`}
              size="lg"
              onClick={() => handleLinkClick(item)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};