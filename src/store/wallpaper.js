import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFAULT_WALLPAPER_ID = 1;

const wallpapers = [
    { id: 1, src: "/images/wallpaper2.jpg", name: "Default" },
    { id: 2, src: "/images/wallpaper.png", name: "Blue Sky" },
    { id: 3, src: "/images/wallpaper3.jpeg", name: "Forest" },
    { id: 4, src: "/images/wallpaper4.webp", name: "City" },
    { id: 5, src: "/images/wallpaper5.webp", name: "Beach" },
];

const useWallpaperStore = create(immer((set) => ({
    selectedWallpaperId: DEFAULT_WALLPAPER_ID,
    wallpapers,

    setWallpaper: (id) => set((state) => {
        const wallpaper = wallpapers.find((wp) => wp.id === id);
        if (wallpaper) {
            state.selectedWallpaperId = id;
            document.body.style.backgroundImage = `url(${wallpaper.src})`;
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundPosition = "center";
        }
    }),
})));

// Helper function outside the store to get selected wallpaper
export const getSelectedWallpaper = () => {
    const state = useWallpaperStore.getState();
    return wallpapers.find((wp) => wp.id === state.selectedWallpaperId) || wallpapers[0];
};

export default useWallpaperStore;