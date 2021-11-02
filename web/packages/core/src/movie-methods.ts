import { RuffleObject } from "./ruffle-object";
import { RuffleEmbed } from "./ruffle-embed";

/*
 **
 ****** Standard Methods ******
 **
 */

/**
 * Goes to the previous frame.
 * SWFv5+
 *
 * @param this RuffleObject or RuffleEmbed.
 */
export function Back(this: RuffleObject | RuffleEmbed): void {
    console.warn("Embed.Back(): Unimplemented");
}

/**
 * Unknown behaviour (relies on ExternalInterface?).
 * SWFv8+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @param _request Unknown.
 * @returns Unknown.
 */
export function CallFunction(
    this: RuffleObject | RuffleEmbed,
    _request: string
): string | undefined {
    if (arguments.length === 0) {
        console.error("Error: Error calling method on NPObject!");
        return undefined;
    }

    console.warn("Embed.CallFunction(): Unimplemented");
    return undefined;
}

/**
 * Returns the value number of the current frame.
 * SWFv5+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @returns A zero-based number.
 */
export function CurrentFrame(this: RuffleObject | RuffleEmbed): number {
    console.warn("Embed.CurrentFrame(): Unimplemented");
    return -1;
}

/**
 * Gets the major version of the player in use.
 * SWFv5+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @returns A version number calculated as follows: (MajorVersion * 65536)
 */
export function FlashVersion(this: RuffleObject | RuffleEmbed): number {
    return 2097152; // Major version: 32
}

/**
 * Goes to the next frame.
 * SWFv5+
 *
 * @param this RuffleObject or RuffleEmbed.
 */
export function Forward(this: RuffleObject | RuffleEmbed): void {
    console.warn("Embed.Forward(): Unimplemented");
}

/**
 * Determines if the player could access to a certain frame number, depending on the loading state.
 * The calculation is based on the maximum frame number, and not on the total of frames in the file.
 * SWFv5+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @param frameNumber The frame to check.
 * @returns True if the player could access to the frame.
 */
export function FrameLoaded(
    this: RuffleObject | RuffleEmbed,
    frameNumber: number
): boolean | undefined {
    if (arguments.length === 0) {
        return undefined;
    }

    frameNumber = Number.parseInt(String(frameNumber), 10);

    if (!Number.isNaN(frameNumber)) {
        if (frameNumber >= 16001) {
            // Exceed maximum frame number.
            return false;
        } else {
            // TODO: If the file is still loading, false can be returned depending on the value of frameNumber.
            return true;
        }
    }

    return true;
}

/**
 * Gets the value of the specified Flash variable.
 * SWFv4+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @param varName The name of the variable to get the value from.
 * @returns The value of the variable as a string, or null if it does not exist.
 */
export function GetVariable(
    this: RuffleObject | RuffleEmbed,
    varName: string
): string | null {
    if (arguments.length === 0) {
        return null;
    }

    varName = String(varName);

    console.warn("Embed.GetVariable(" + varName + "): Unimplemented");
    return null;
}

/**
 * Activates the specified frame number in the current movie.
 * SWFv2+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @param frameNumber The frame number to go to which is zero-based.
 */
export function GotoFrame(
    this: RuffleObject | RuffleEmbed,
    frameNumber: number
): void {
    if (arguments.length === 0) {
        return;
    }

    frameNumber = Number.parseInt(String(frameNumber), 10);

    if (Number.isNaN(frameNumber) || frameNumber < 0) {
        frameNumber = 0;
    }

    // TODO: If the argument is greater or equal to the total of frames in the file, go to "LastFrame - 1", or
    // if the frame is not yet available because the file is still loading, go to the last frame available - 1 and stop.
    console.warn("Embed.GotoFrame(): Unimplemented");
}

/**
 * Determine whether a movie is currently playing.
 * SWFv2+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @returns True if the movie is currently playing.
 */
export function IsPlaying(this: RuffleObject | RuffleEmbed): boolean {
    console.warn("Embed.IsPlaying(): Unimplemented");
    return false;
}

/**
 * Loads a movie identified by a url to a specified layer.
 * SWFv3+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @param layerNumber The layer number to load the movie to.
 * @param url The url of the movie to load.
 */
export function LoadMovie(
    this: RuffleObject | RuffleEmbed,
    layerNumber: number,
    url: string
): void {
    if (arguments.length < 2) {
        return;
    }

    layerNumber = Number.parseInt(String(layerNumber), 10);
    url = String(url);

    if (Number.isNaN(layerNumber)) {
        layerNumber = 0;
    }

    console.warn(
        "Embed.LoadMovie(" +
            String(layerNumber) +
            ", " +
            url +
            "): Unimplemented"
    );
}

/**
 * Pans a zoomed-in movie to the specified coordinates.
 * SWFv2+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @param x The x coordinate.
 * @param y The y coordinate.
 * @param mode Indicate whether the coordinates are pixels (0) or percent (1).
 */
export function Pan(
    this: RuffleObject | RuffleEmbed,
    x: number,
    y: number,
    mode: number
): void {
    if (arguments.length < 3) {
        return;
    }

    x = Number.parseInt(String(x), 10);
    if (Number.isNaN(x)) x = 0;
    y = Number.parseInt(String(y), 10);
    if (Number.isNaN(y)) y = 0;
    mode = Number.parseInt(String(mode), 10);
    if (Number.isNaN(mode) || mode < 0 || mode > 1) mode = 0;

    if (x === 0 && y === 0) {
        return;
    }

    console.warn("Embed.Pan(): Unimplemented");
}

/**
 * Returns the percent of the movie that has streamed into the browser so far.
 * SWFv2+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @returns A number from 0 to 100.
 */
export function PercentLoaded(this: RuffleObject | RuffleEmbed): number {
    console.warn("Embed.PercentLoaded(): Unimplemented");
    return 100;
}

/**
 * Starts playing the movie.
 * SWFv2+
 *
 * @param this RuffleObject or RuffleEmbed.
 */
export function Play(this: RuffleObject | RuffleEmbed): void {
    console.warn("Embed.Play(): Unimplemented");
}

/**
 * Goes to the first frame.
 * SWFv2+
 *
 * @param this RuffleObject or RuffleEmbed.
 */
export function Rewind(this: RuffleObject | RuffleEmbed): void {
    console.warn("Embed.Rewind(): Unimplemented");
}

/**
 * Sets the value of a specified Flash variable.
 * SWFv4+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @param varName The name of the variable to set the value of.
 * @param value The value to set.
 */
export function SetVariable(
    this: RuffleObject | RuffleEmbed,
    varName: string,
    value: string
): void {
    if (arguments.length < 2) {
        return;
    }

    varName = String(varName);
    value = String(value);

    console.warn(
        "Embed.SetVariable(" + varName + ", " + value + "): Unimplemented"
    );
}

/**
 * Zooms in on a rectangular area of the movie.
 * SWFv2+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @param left The units of the left coordinate, in twips.
 * @param top The units of the top coordinate, in twips.
 * @param right The units of the right coordinate, in twips.
 * @param bottom The units of the bottom coordinate, in twips.
 */
export function SetZoomRect(
    this: RuffleObject | RuffleEmbed,
    left: number,
    top: number,
    right: number,
    bottom: number
): void {
    if (arguments.length < 4) {
        return;
    }

    left = Number.parseInt(String(left), 10);
    if (Number.isNaN(left)) left = 0;
    top = Number.parseInt(String(top), 10);
    if (Number.isNaN(top)) top = 0;
    right = Number.parseInt(String(right), 10);
    if (Number.isNaN(right)) right = 0;
    bottom = Number.parseInt(String(bottom), 10);
    if (Number.isNaN(bottom)) bottom = 0;

    if (right <= left || bottom <= top) {
        // TODO: Restore default view in this situation
    }

    console.warn("Embed.SetZoomRect(): Unimplemented");
}

/**
 * Stops playing the movie.
 * SWFv2+
 *
 * @param this RuffleObject or RuffleEmbed.
 */
export function StopPlay(this: RuffleObject | RuffleEmbed): void {
    console.warn("Embed.StopPlay(): Unimplemented");
}

/**
 * Returns the total number of frames in the movie.
 * SWFv2+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @returns The total number of frames.
 */
export function TotalFrames(this: RuffleObject | RuffleEmbed): number {
    console.warn("Embed.TotalFrames(): Unimplemented");
    return 16000;
}

/**
 * Zooms the view by a specified relative scale factor.
 * SWFv2+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @param percent The relative scale factor. 50 doubles the size of the objects in the view,
 * 200 reduces the size of objects in the view by one half. 0 resets the view to 100%.
 */
export function Zoom(this: RuffleObject | RuffleEmbed, percent: number): void {
    if (arguments.length === 0) {
        return;
    }

    percent = Number.parseInt(String(percent), 10);
    if (Number.isNaN(percent)) percent = 0;

    console.warn("Embed.Zoom(): Unimplemented");
}

/*
 **
 ****** TellTarget Methods ******
 **
 */

/**
 * Executes the action in a specified frame, in a specified timeline.
 * SWFv4+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @param target The timeline to use.
 * @param frameNumber The frame number to execute the action into.
 */
export function TCallFrame(
    this: RuffleObject | RuffleEmbed,
    target: string,
    frameNumber: number
): void {
    if (arguments.length < 2) {
        return;
    }

    target = String(target);
    frameNumber = Number.parseInt(String(target), 10);
    if (Number.isNaN(frameNumber)) frameNumber = 0;

    console.warn("Embed.TCallFrame(): Unimplemented");
}

/**
 * Executes the action in a specified frame using a label, in a specified timeline.
 * SWFv4+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @param target The timeline to use.
 * @param label The frame label to execute the action into.
 */
export function TCallLabel(
    this: RuffleObject | RuffleEmbed,
    target: string,
    label: string
): void {
    if (arguments.length < 2) {
        return;
    }

    target = String(target);
    label = String(label);

    console.warn(
        "Embed.TCallLabel(" + target + ", " + label + "): Unimplemented"
    );
}

/**
 * Gets the number of the current frame for the specified timeline.
 * SWFv3+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @param target The timeline to use.
 * @returns A zero-based frame number or -1 if there is none.
 */
export function TCurrentFrame(
    this: RuffleObject | RuffleEmbed,
    target: string
): number | undefined {
    if (arguments.length === 0) {
        return undefined;
    }

    target = String(target);

    console.warn("Embed.TCurrentFrame(" + target + "): Unimplemented");
    return -1;
}

/**
 * Gets the label of the current frame for the specified timeline.
 * SWFv3+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @param target The timeline to use.
 * @returns The label of the current frame or an empty string if there is none.
 */
export function TCurrentLabel(
    this: RuffleObject | RuffleEmbed,
    target: string
): string {
    if (arguments.length === 0) {
        return "";
    }

    target = String(target);

    console.warn("Embed.TCurrentLabel(" + target + "): Unimplemented");
    return "";
}

/**
 * Returns a string indicating the value of the specified property for the specified timeline.
 * SWFv4+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @param target The timeline to use.
 * @param property The index of the property to get the value from.
 * @returns The value of the property as a string.
 */
export function TGetProperty(
    this: RuffleObject | RuffleEmbed,
    target: string,
    property: number
): string | undefined {
    if (arguments.length < 2) {
        return undefined;
    }

    target = String(target);
    property = Number.parseInt(String(target), 10);

    if (Number.isNaN(property)) {
        return "0";
    } else if (property < 0 || property > 21) {
        return undefined;
    }

    console.warn("Embed.TGetProperty(): Unimplemented");
    return "0";
}

/**
 * Returns a number indicating the value of the specified property for the specified timeline.
 * SWFv4+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @param target The timeline to use.
 * @param property The index of the property to get the value from.
 * @returns The value of the property as a number.
 */
export function TGetPropertyAsNumber(
    this: RuffleObject | RuffleEmbed,
    target: string,
    property: number
): number | undefined {
    if (arguments.length < 2) {
        return undefined;
    }

    target = String(target);
    property = Number.parseInt(String(target), 10);

    if (Number.isNaN(property) || property < 0 || property > 21) {
        return 0;
    }

    // TODO: Values that cannot be coerced to a number return NaN. Booleans return 1 or 0.
    console.warn("Embed.TGetPropertyAsNumber(): Unimplemented");
    return 0;
}

// Alias of `TGetPropertyAsNumber`.
export const TGetPropertyNum = TGetPropertyAsNumber;

/**
 * Goes to the specified frame number in the specified timeline.
 * SWFv3+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @param target The timeline to use.
 * @param frameNumber The frame number to go to.
 */
export function TGotoFrame(
    this: RuffleObject | RuffleEmbed,
    target: string,
    frameNumber: number
): void {
    if (arguments.length < 2) {
        return;
    }

    target = String(target);
    frameNumber = Number.parseInt(String(frameNumber), 10);

    if (Number.isNaN(frameNumber) || frameNumber < 0) {
        frameNumber = 0;
    }

    // TODO: If frameNumber is greater or equal to the total of frames in the file, go to "LastFrame - 1", or
    // if the frame is not yet available because the file is still loading, go to the last frame available - 1 and stop.
    console.warn("Embed.TGotoFrame(): Unimplemented");
}

/**
 * Goes to the specified frame label in the specified timeline.
 * SWFv3+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @param target The timeline to use.
 * @param frameLabel The frame label to go to.
 */
export function TGotoLabel(
    this: RuffleObject | RuffleEmbed,
    target: string,
    frameLabel: string
): void {
    if (arguments.length < 2) {
        return;
    }

    target = String(target);
    frameLabel = String(frameLabel);

    console.warn(
        "Embed.TGotoLabel(" + target + "," + frameLabel + "): Unimplemented"
    );
}

/**
 * Plays the specified timeline.
 * SWFv3+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @param target The timeline to play.
 */
export function TPlay(this: RuffleObject | RuffleEmbed, target: string): void {
    if (arguments.length === 0) {
        return;
    }

    target = String(target);

    console.warn("Embed.TPlay(" + target + "): Unimplemented");
}

/**
 * Sets the value of the specified property in the specified timeline.
 * SWFv4+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @param target The timeline to use.
 * @param property The index of the property to set the value of.
 * @param _value The value to set.
 */
export function TSetProperty(
    this: RuffleObject | RuffleEmbed,
    target: string,
    property: number,
    _value: number | string
): void {
    if (arguments.length < 3) {
        return;
    }

    target = String(target);
    property = Number.parseInt(String(target), 10);

    if (Number.isNaN(property) || property < 0 || property > 21) {
        return;
    }

    console.warn("Embed.TSetProperty(): Unimplemented");
}

/**
 * Stops the specified timeline.
 * SWFv3+
 *
 * @param this RuffleObject or RuffleEmbed.
 * @param target The timeline to stop.
 */
export function TStopPlay(
    this: RuffleObject | RuffleEmbed,
    target: string
): void {
    if (arguments.length === 0) {
        return;
    }

    target = String(target);

    console.warn("Embed.TStopPlay(" + target + "): Unimplemented");
}
