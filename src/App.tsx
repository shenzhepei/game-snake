import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AppHeader } from "./components/AppHeader";
import { SnakeBoard } from "./game/SnakeBoard";
import type { Difficulty } from "./game/useSnakeGame";

export default function App() {
  const { t } = useTranslation();
  const [difficulty, setDifficulty] = useState<Difficulty>("classic");
  return (
    <div className="app-shell">
      <AppHeader />
      <main>
        <div className="intro">
          <div><p>01 / CLASSIC</p><h1>{t("title")}</h1><span>{t("subtitle")}</span></div>
          <label>{t("difficulty")}
            <select onChange={(event) => setDifficulty(event.target.value as Difficulty)} value={difficulty}>
              <option value="calm">{t("calm")}</option><option value="classic">{t("classic")}</option><option value="rapid">{t("rapid")}</option>
            </select>
          </label>
        </div>
        <SnakeBoard difficulty={difficulty} />
      </main>
    </div>
  );
}
