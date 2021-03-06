<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "controllers".
 *
 * @property integer $id
 * @property string $controller_name
 * @property string $slug
 *
 * @property Actions[] $actions
 */
class Controllers extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'controllers';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['controller_name', 'slug'], 'required'],
            [['controller_name', 'slug'], 'string', 'max' => 25],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'controller_name' => 'Controller Name',
            'slug' => 'Slug',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getActions()
    {
        return $this->hasMany(Actions::className(), ['controller_id' => 'id']);
    }
}
