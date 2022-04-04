import type { Synth } from "tone";
import type { InjectionKey } from "vue";

export const synthInjectionKey: InjectionKey<Synth> = Symbol("synth");
