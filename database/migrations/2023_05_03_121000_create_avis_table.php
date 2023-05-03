<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('avis', function (Blueprint $table) {
            $table->bigIncrements('id_avis');
            $table->foreignId('id_user')->references('id')->on('users')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('id_acheteur')->references('id_acheteur')->on('acheteurs')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('id_article')->references('id_article')->on('articles')->cascadeOnDelete()->cascadeOnUpdate();
            $table->integer('nbr_etoile');
            $table->string('avis');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('avis');
    }
};
