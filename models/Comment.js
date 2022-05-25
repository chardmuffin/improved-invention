const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model {
    // static async createComment(commentData) {
    //     return await this.create(commentData);
    // }

    // static async getCommentById(commentId) {
    //     return await this.findOne({
    //         where: {
    //             id: commentId,
    //         },
    //     });
    // }

    // static async getComments() {
    //     return await this.findAll();
    // }

    // static async updateComment(commentId, commentData) {
    //     return await this.update(commentData, {
    //         where: {
    //             id: commentId,
    //         },
    //     });
    // }

    // static async deleteComment(commentId) {
    //     return await this.destroy({
    //         where: {
    //             id: commentId,
    //         },
    //     });
    // }
}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,   
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',  
    }
);

module.exports = Comment;
