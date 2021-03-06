<?php
/**
 * Created by PhpStorm.
 * User: akshay
 * Date: 10/5/17
 * Time: 11:30 PM
 */
use yii\bootstrap\ActiveForm;
use kartik\switchinput\SwitchInput;
use kartik\date\DatePicker;
use kartik\select2\Select2;
use common\models\Role;
use common\models\Media;
?>

<div class="container">
    <div class="row">
        <div class="col-md-2">
            <!-- start: list-group navi for large devices -->
            <div class="panel panel-default">
                <div class="panel-heading">Manage <strong>Settings</strong></div>
                <div class="list-group">
                    <a class="list-group-item active" href="<?= Yii::$app->urlManager->createAbsoluteUrl('setting/index') ?>"><i class="fa fa-users"></i><span> System User </span></a>
                    <a class="list-group-item" href="<?= Yii::$app->urlManager->createAbsoluteUrl('setting/roles') ?>"><i class="fa fa-user"></i><span> Roles </span></a>
                    <a class="list-group-item" href="<?= Yii::$app->urlManager->createAbsoluteUrl('setting/rights') ?>"><i class="fa fa-user"></i><span> Rights </span></a>
                </div>
            </div>
            <!-- end: list-group navi for large devices -->
        </div>
        <div class="col-md-10">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <strong>Users</strong> Edit <!-- check if flash message exists -->
                </div>
                <div class="panel-body">
                    <div class="help-block">
                        Here you can manage User which is listed on Application.
                    </div>
                    <div class="table-responsive">
                        <div class="col-md-12">
                            <?php echo $this->render('_user_form',['model'=>$model]);?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
$this->registerJs("
    $('#user_email').prop('disabled', true);
");
?>