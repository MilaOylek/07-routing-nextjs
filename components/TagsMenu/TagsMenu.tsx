"use client";

import { useState } from "react";
import Link from "next/link";
import css from "./TagsMenu.module.css";

const tags = ["All", "Work", "Personal", "Meeting", "Shopping", "Todo"];

export default function TagsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={css.menuContainer}>
      <button
        onClick={toggleMenu}
        className={css.menuButton}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Notes ▾
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          {tags.map((tag) => (
            <li key={tag} className={css.menuItem}>
              <Link
                href={tag === "All" ? "/notes/filter" : `/notes/filter/${tag}`}
                onClick={toggleMenu}
                className={css.menuLink}
              >
                {tag === "All" ? "All Notes" : tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
