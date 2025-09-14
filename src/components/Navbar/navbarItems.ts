export interface NavItem {
    href: string;
    label: string;
    icon: string;
}

export const NavItems: NavItem[] = [
    {href: "#artikel", label: "Artikel", icon: "📚"},
    {href: "#kalkulator", label: "Simulasi", icon: "🧮"},
    {href: "#komunitas", label: "Komunitas", icon: "👥"},
];
