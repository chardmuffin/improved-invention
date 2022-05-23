const { Model, DataTypes } = require('sequelize');
const sequelize = require('./config/config');

class Post extends Model {
    // static async createPost(postData) {
    //     return await this.create(postData);
    // }

    // static async getPostById(postId) {
    //     return await this.findOne({
    //         where: {
    //             id: postId,
    //         },
    //     });
    // }

    // static async getPosts() {
    //     return await this.findAll();
    // }

    // static async updatePost(postId, postData) {
    //     return await this.update(postData, {
    //         where: {
    //             id: postId,
    //         },
    //     });
    // }

    // static async deletePost(postId) {
    //     return await this.destroy({
    //         where: {
    //             id: postId,
    //         },
    //     });
    // }
}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
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
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
);

module.exports = Post
