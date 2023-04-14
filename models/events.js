'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Stage, StageEvent}) {
      // define association here
      Event.belongsToMany(Stage, {
        foreignKey: "event_id",
        as: "stages",
        through: StageEvent
    })
     // meet and greets 
     Event.hasMany(MeetGreet, {
      foreignKey: "event_id",
      as: "meet_greets"
    })

    // set times 
    Event.hasMany(SetTime, {
      foreignKey: "event_id",
      as: "set_times"
    })
    }
  }
  Events.init({

    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },      
    genre:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    available_start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
  },{
          sequelize,
          modelName: 'Events',
          tableName: 'events',
          timestamps: false
    });
  return Events;
};