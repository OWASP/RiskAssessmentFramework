<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFactorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('factor', function (Blueprint $table) {
            $table->increments('id_factor');
            $table->integer('id_host')->unsigned();
            $table->integer('id_category')->unsigned();
            $table->integer('skill_level');
            $table->integer('motive');
            $table->integer('opportunity');
            $table->integer('size');
            $table->integer('ease_discovery');
            $table->integer('ease_exploit');
            $table->integer('awareness');
            $table->integer('intrusion_detection');
            $table->integer('loss_confidentiality');
            $table->integer('loss_integrity');
            $table->integer('loss_availability');
            $table->integer('loss_accountability');
            $table->integer('financial_damage');
            $table->integer('reputation_damage');
            $table->integer('non_compliance');
            $table->integer('privacy_voilation');
            $table->enum('impact', ['low', 'medium', 'high']);
            $table->enum('likelihood', ['low', 'medium', 'high']);
            $table->enum('overall', ['note', 'low', 'medium', 'high', 'critical']);
            $table->timestamps();
            $table->foreign('id_host')->references('id_host')->on('host')->onUpdate('cascade')->onDelete('cascade');;
            $table->foreign('id_category')->references('id_category')->on('category');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('factor');
    }
}
