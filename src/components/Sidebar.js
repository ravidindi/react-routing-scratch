import Link from "./Link";
function Sidebar(){

    const links=[
        {label:'Dropdown',path:'/'},
        {label:'Accordion',path:'/accordion'},
        {label:'Buttons',path:'/buttons'},
    ]

    const renderedLinks=links.map(link=><Link key={link.label} className="mb-3" activatedClassName="font-bold border-l-4 border-blue-500 pl-2" to={link.path}>{link.label}</Link>)

    return <div className="sticky top-0 overflow-y-scroll no-scrollbar flex flex-col items-start">
        {renderedLinks}
    </div>

}
export default Sidebar;