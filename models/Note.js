import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

export const Note = sequelize.define("Note", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Note.sync({ logging: false });

export default Note;
