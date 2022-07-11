<template>
    <router-link to="/">Home Page</router-link>
    <div class="m5 p-4 bg-blue-900 bg-opacity-50 text-left">
        <Fonts_Colors />
        <EspacamentoElementos />
        <div class="m-5">
            <BodasElementos />
        </div>
        <div class="m-5">
            <BackgroundColor />
        </div>
        <div class="m-5">
            <LaguraAltura />
        </div>
        <div class="m-5">
            <FlexBox />
        </div>
        <div class="m-5">
            <GridComponent />
        </div>
        <div class="m-5">
            <ResponsividadeComponent />
        </div>
        <div class="m-5">
            <HoverFocus />
        </div>
        <div class="m-5">
            <ModoNoturno />
        </div>
        <div class="m-5">
            <CardComponent />
        </div>
        <div class="m-5">
            <ButtonComponent />
        </div>
        <div class="m-5">
            <BadgeComponent />
        </div>
        <div class="m-5">
            <InputComponent />
        </div>
        <div class="m-5">
            <DropDown />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Fonts_Colors from '@/components/Fonts_Colors.vue';
import EspacamentoElementos from '@/components/EspacamentoElementos.vue';
import BodasElementos from '@/components/BodasElementos.vue';
import BackgroundColor from '@/components/BackgroundColor.vue';
import LaguraAltura from '@/components/LaguraAltura.vue';
import FlexBox from '@/components/FlexBox.vue';
import GridComponent from '@/components/GridComponent.vue';
import ResponsividadeComponent from '@/components/ResponsividadeComponent.vue';
import HoverFocus from '@/components/HoverFocus.vue';
import ModoNoturno from '@/components/ModoNoturno.vue';
import CardComponent from '@/components/CardComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import BadgeComponent from '@/components/BadgeComponent.vue';
import InputComponent from '@/components/InputComponent.vue';
import DropDown from '@/components/DropDown.vue';

export default defineComponent({
    name: "FundamentosPage",
    components: { Fonts_Colors, EspacamentoElementos, BodasElementos, BackgroundColor, LaguraAltura, FlexBox, GridComponent, ResponsividadeComponent, HoverFocus, ModoNoturno, CardComponent, ButtonComponent, BadgeComponent, InputComponent, DropDown }
})
</script>

<style scoped>
</style>