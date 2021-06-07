import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Button } from "../MvpButton";
import styles from '../SideBar/styles.module.scss';

interface ISideBarProps {
  selectedElementId: number;
  handleClickButton(id: number): void;
}

export function SideBar({ selectedElementId, handleClickButton }: ISideBarProps) {
  const [element, setElement] = useState<ElementResponseProps[]>([]);

  useEffect(() => {
    api.get<ElementResponseProps[]>('element').then(response => {
      setElement(response.data);
    });
  }, []);

  return (
    <nav className={styles.sideBar}>
      <span>MVP<p>Database</p></span>
      <div className={styles.buttonContainer}>
        {element.map(element => (
          <Button
            key={String(element.id)}
            title={element.title}
            iconName={element.name}
            onClick={() => handleClickButton(element.id)}
            selected={selectedElementId === element.id}
          />
        ))}
      </div>
    </nav>
  );
}