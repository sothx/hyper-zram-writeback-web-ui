const { ref, onMounted } = Vue;
import $to from '../assets/await-to-js.js';
import * as deviceApi from '../apis/deviceApi.js';
export function useZRAMWriteback() {

	const backingDev = ref('');

	const miuiExtmDmOptEnable = ref(false);

	const totalWriteBack = ref(0);

	const hasWriteBack = ref(0);

	const totalRead = ref(0);

	onMounted(async () => {
		const [, getMiuiExtmDmOptEnableResolve] = await $to(deviceApi.getMiuiExtmDmOptEnable());
		if (getMiuiExtmDmOptEnableResolve === 'true')  {
			miuiExtmDmOptEnable.value = true
		}
		const [, getBackingDevResolve] = await $to(deviceApi.getBackingDev());
		if (getBackingDevResolve) {
			backingDev.value = getBackingDevResolve
		}
		const [, getMiuiExtmDmOptTotalWriteBackResolve] = await $to(deviceApi.getMiuiExtmDmOptTotalWriteBack());
		if (Number(getMiuiExtmDmOptTotalWriteBackResolve) && Number(getMiuiExtmDmOptTotalWriteBackResolve) > 0) {
			totalWriteBack.value = Number(getMiuiExtmDmOptTotalWriteBackResolve)
		}
		const [, getMiuiExtmDmOptTotalReadResolve] = await $to(deviceApi.getMiuiExtmDmOptTotalRead());
		if (Number(getMiuiExtmDmOptTotalReadResolve) && Number(getMiuiExtmDmOptTotalReadResolve) > 0) {
			totalRead.value = Number(getMiuiExtmDmOptTotalReadResolve)
		}
		const [, getMiuiExtmDmOptHasWriteBackResolve] = await $to(deviceApi.getMiuiExtmDmOptHasWriteBack());
		if (Number(getMiuiExtmDmOptHasWriteBackResolve) && Number(getMiuiExtmDmOptHasWriteBackResolve) > 0) {
			hasWriteBack.value = Number(getMiuiExtmDmOptHasWriteBackResolve)
		}
	});

	return {
		backingDev,
		miuiExtmDmOptEnable,
		totalWriteBack,
		hasWriteBack,
		totalRead
	};
}
