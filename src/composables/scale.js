import { ref } from "vue";

export function useScale(){
    return {
        scale:ref(60)
    }
}