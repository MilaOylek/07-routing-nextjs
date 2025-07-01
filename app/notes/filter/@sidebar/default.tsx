import css from "./SidebarNotes.module.css";
import Link from "next/link";

const categories = ["All", "Work", "Personal", "Meeting", "Shopping", "Todo"];

const SidebarNotes = async () => {
  return (
    <ul className={css.menuList}>
      {categories.map((tag) => (
        <li key={tag} className={css.menuItem}>
           <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarNotes;
