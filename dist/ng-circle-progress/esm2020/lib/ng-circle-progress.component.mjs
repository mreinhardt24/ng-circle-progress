import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { timer } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CircleProgressComponent__svg_svg_0__svg_linearGradient_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "linearGradient");
    i0.ɵɵelement(1, "stop", 5)(2, "stop", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("id", ctx_r1.svg.outerLinearGradient.id);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("stop-color", ctx_r1.svg.outerLinearGradient.colorStop1)("stop-opacity", 1);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("stop-color", ctx_r1.svg.outerLinearGradient.colorStop2)("stop-opacity", 1);
} }
function CircleProgressComponent__svg_svg_0__svg_radialGradient_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "radialGradient");
    i0.ɵɵelement(1, "stop", 5)(2, "stop", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("id", ctx_r2.svg.radialGradient.id);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("stop-color", ctx_r2.svg.radialGradient.colorStop1)("stop-opacity", 1);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("stop-color", ctx_r2.svg.radialGradient.colorStop2)("stop-opacity", 1);
} }
function CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "circle");
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("cx", ctx_r8.svg.backgroundCircle.cx)("cy", ctx_r8.svg.backgroundCircle.cy)("r", ctx_r8.svg.backgroundCircle.r)("fill", ctx_r8.svg.backgroundCircle.fill)("fill-opacity", ctx_r8.svg.backgroundCircle.fillOpacity)("stroke", ctx_r8.svg.backgroundCircle.stroke)("stroke-width", ctx_r8.svg.backgroundCircle.strokeWidth);
} }
function CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "circle");
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵattributeInterpolate2("fill", "url(", ctx_r9.window.location.href, "#", ctx_r9.svg.radialGradient.id, ")");
    i0.ɵɵattribute("cx", ctx_r9.svg.backgroundCircle.cx)("cy", ctx_r9.svg.backgroundCircle.cy)("r", ctx_r9.svg.backgroundCircle.r)("fill-opacity", ctx_r9.svg.backgroundCircle.fillOpacity)("stroke", ctx_r9.svg.backgroundCircle.stroke)("stroke-width", ctx_r9.svg.backgroundCircle.strokeWidth);
} }
function CircleProgressComponent__svg_svg_0__svg_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_1_Template, 1, 7, "circle", 2);
    i0.ɵɵtemplate(2, CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_2_Template, 1, 8, "circle", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r3.options.backgroundGradient);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.options.backgroundGradient);
} }
function CircleProgressComponent__svg_svg_0__svg_circle_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "circle");
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("cx", ctx_r4.svg.circle.cx)("cy", ctx_r4.svg.circle.cy)("r", ctx_r4.svg.circle.r)("fill", ctx_r4.svg.circle.fill)("stroke", ctx_r4.svg.circle.stroke)("stroke-width", ctx_r4.svg.circle.strokeWidth);
} }
function CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "path");
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("d", ctx_r10.svg.path.d)("stroke", ctx_r10.svg.path.stroke)("stroke-width", ctx_r10.svg.path.strokeWidth)("stroke-linecap", ctx_r10.svg.path.strokeLinecap)("fill", ctx_r10.svg.path.fill);
} }
function CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "path");
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵattributeInterpolate2("stroke", "url(", ctx_r11.window.location.href, "#", ctx_r11.svg.outerLinearGradient.id, ")");
    i0.ɵɵattribute("d", ctx_r11.svg.path.d)("stroke-width", ctx_r11.svg.path.strokeWidth)("stroke-linecap", ctx_r11.svg.path.strokeLinecap)("fill", ctx_r11.svg.path.fill);
} }
function CircleProgressComponent__svg_svg_0__svg_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_1_Template, 1, 5, "path", 2);
    i0.ɵɵtemplate(2, CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_2_Template, 1, 6, "path", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.options.outerStrokeGradient);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.options.outerStrokeGradient);
} }
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1__svg_tspan_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "tspan");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tspan_r16 = ctx.$implicit;
    const ctx_r15 = i0.ɵɵnextContext(4);
    i0.ɵɵattribute("x", ctx_r15.svg.title.x)("y", ctx_r15.svg.title.y)("dy", tspan_r16.dy)("font-size", ctx_r15.svg.title.fontSize)("font-weight", ctx_r15.svg.title.fontWeight)("fill", ctx_r15.svg.title.color);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(tspan_r16.span);
} }
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1__svg_tspan_1_Template, 2, 7, "tspan", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r12.svg.title.tspans);
} }
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_tspan_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "tspan");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("font-size", ctx_r13.svg.units.fontSize)("font-weight", ctx_r13.svg.units.fontWeight)("fill", ctx_r13.svg.units.color);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r13.svg.units.text);
} }
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3__svg_tspan_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "tspan");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tspan_r18 = ctx.$implicit;
    const ctx_r17 = i0.ɵɵnextContext(4);
    i0.ɵɵattribute("x", ctx_r17.svg.subtitle.x)("y", ctx_r17.svg.subtitle.y)("dy", tspan_r18.dy)("font-size", ctx_r17.svg.subtitle.fontSize)("font-weight", ctx_r17.svg.subtitle.fontWeight)("fill", ctx_r17.svg.subtitle.color);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(tspan_r18.span);
} }
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3__svg_tspan_1_Template, 2, 7, "tspan", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r14.svg.subtitle.tspans);
} }
function CircleProgressComponent__svg_svg_0__svg_text_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "text", 7);
    i0.ɵɵtemplate(1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(2, CircleProgressComponent__svg_svg_0__svg_text_7__svg_tspan_2_Template, 2, 4, "tspan", 2);
    i0.ɵɵtemplate(3, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("x", ctx_r6.svg.circle.cx)("y", ctx_r6.svg.circle.cy)("text-anchor", ctx_r6.svg.title.textAnchor);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.options.showTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.options.showUnits);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.options.showSubtitle);
} }
function CircleProgressComponent__svg_svg_0__svg_image_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "image", 9);
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("height", ctx_r7.svg.image.height)("width", ctx_r7.svg.image.width)("href", ctx_r7.svg.image.src, null, "xlink")("x", ctx_r7.svg.image.x)("y", ctx_r7.svg.image.y);
} }
function CircleProgressComponent__svg_svg_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 1);
    i0.ɵɵlistener("click", function CircleProgressComponent__svg_svg_0_Template__svg_svg_click_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.emitClickEvent($event); });
    i0.ɵɵelementStart(1, "defs");
    i0.ɵɵtemplate(2, CircleProgressComponent__svg_svg_0__svg_linearGradient_2_Template, 3, 5, "linearGradient", 2);
    i0.ɵɵtemplate(3, CircleProgressComponent__svg_svg_0__svg_radialGradient_3_Template, 3, 5, "radialGradient", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CircleProgressComponent__svg_svg_0__svg_ng_container_4_Template, 3, 2, "ng-container", 2);
    i0.ɵɵtemplate(5, CircleProgressComponent__svg_svg_0__svg_circle_5_Template, 1, 6, "circle", 2);
    i0.ɵɵtemplate(6, CircleProgressComponent__svg_svg_0__svg_ng_container_6_Template, 3, 2, "ng-container", 2);
    i0.ɵɵtemplate(7, CircleProgressComponent__svg_svg_0__svg_text_7_Template, 4, 6, "text", 3);
    i0.ɵɵtemplate(8, CircleProgressComponent__svg_svg_0__svg_image_8_Template, 1, 5, "image", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("viewBox", ctx_r0.svg.viewBox)("height", ctx_r0.svg.height)("width", ctx_r0.svg.width)("class", ctx_r0.options.class);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.options.outerStrokeGradient);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.options.backgroundGradient);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.options.showBackground);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.options.showInnerStroke);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", +ctx_r0.options.percent !== 0 || ctx_r0.options.showZeroOuterStroke);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.options.showImage && (ctx_r0.options.showTitle || ctx_r0.options.showUnits || ctx_r0.options.showSubtitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.options.showImage);
} }
export class CircleProgressOptions {
    constructor() {
        this.class = '';
        this.backgroundGradient = false;
        this.backgroundColor = 'transparent';
        this.backgroundGradientStopColor = 'transparent';
        this.backgroundOpacity = 1;
        this.backgroundStroke = 'transparent';
        this.backgroundStrokeWidth = 0;
        this.backgroundPadding = 5;
        this.percent = 0;
        this.radius = 90;
        this.space = 4;
        this.toFixed = 0;
        this.maxPercent = 1000;
        this.renderOnClick = true;
        this.units = '%';
        this.unitsFontSize = '10';
        this.unitsFontWeight = 'normal';
        this.unitsColor = '#444444';
        this.outerStrokeGradient = false;
        this.outerStrokeWidth = 8;
        this.outerStrokeColor = '#78C000';
        this.outerStrokeGradientStopColor = 'transparent';
        this.outerStrokeLinecap = 'round';
        this.innerStrokeColor = '#C7E596';
        this.innerStrokeWidth = 4;
        this.titleFormat = undefined;
        this.title = 'auto';
        this.titleColor = '#444444';
        this.titleFontSize = '20';
        this.titleFontWeight = 'normal';
        this.subtitleFormat = undefined;
        this.subtitle = 'progress';
        this.subtitleColor = '#A9A9A9';
        this.subtitleFontSize = '10';
        this.subtitleFontWeight = 'normal';
        this.imageSrc = undefined;
        this.imageHeight = 0;
        this.imageWidth = 0;
        this.animation = true;
        this.animateTitle = true;
        this.animateSubtitle = false;
        this.animationDuration = 500;
        this.showTitle = true;
        this.showSubtitle = true;
        this.showUnits = true;
        this.showImage = false;
        this.showBackground = true;
        this.showInnerStroke = true;
        this.clockwise = true;
        this.responsive = false;
        this.startFromZero = true;
        this.showZeroOuterStroke = true;
        this.lazy = false;
    }
}
export class CircleProgressComponent {
    constructor(defaultOptions, ngZone, elRef, injector) {
        this.ngZone = ngZone;
        this.elRef = elRef;
        this.onClick = new EventEmitter();
        // <svg> of component
        this.svgElement = null;
        // whether <svg> is in viewport
        this.isInViewport = false;
        // event for notifying viewport change caused by scrolling or resizing
        this.onViewportChanged = new EventEmitter();
        this._viewportChangedSubscriber = null;
        this.options = new CircleProgressOptions();
        this.defaultOptions = new CircleProgressOptions();
        this._lastPercent = 0;
        this._gradientUUID = null;
        this.render = () => {
            this.applyOptions();
            if (this.options.lazy) {
                // Draw svg if it doesn't exist
                this.svgElement === null && this.draw(this._lastPercent);
                // Draw it only when it's in the viewport
                if (this.isInViewport) {
                    // Draw it at the latest position when I am in.
                    if (this.options.animation && this.options.animationDuration > 0) {
                        this.animate(this._lastPercent, this.options.percent);
                    }
                    else {
                        this.draw(this.options.percent);
                    }
                    this._lastPercent = this.options.percent;
                }
            }
            else {
                if (this.options.animation && this.options.animationDuration > 0) {
                    this.animate(this._lastPercent, this.options.percent);
                }
                else {
                    this.draw(this.options.percent);
                }
                this._lastPercent = this.options.percent;
            }
        };
        this.polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
            let angleInRadius = angleInDegrees * Math.PI / 180;
            let x = centerX + Math.sin(angleInRadius) * radius;
            let y = centerY - Math.cos(angleInRadius) * radius;
            return { x: x, y: y };
        };
        this.draw = (percent) => {
            // make percent reasonable
            percent = (percent === undefined) ? this.options.percent : Math.abs(percent);
            // circle percent shouldn't be greater than 100%.
            let circlePercent = (percent > 100) ? 100 : percent;
            // determine box size
            let boxSize = this.options.radius * 2 + this.options.outerStrokeWidth * 2;
            if (this.options.showBackground) {
                boxSize += (this.options.backgroundStrokeWidth * 2 + this.max(0, this.options.backgroundPadding * 2));
            }
            // the centre of the circle
            let centre = { x: boxSize / 2, y: boxSize / 2 };
            // the start point of the arc
            let startPoint = { x: centre.x, y: centre.y - this.options.radius };
            // get the end point of the arc
            let endPoint = this.polarToCartesian(centre.x, centre.y, this.options.radius, 360 * (this.options.clockwise ?
                circlePercent :
                (100 - circlePercent)) / 100); // ####################
            // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x a little bit.
            if (circlePercent === 100) {
                endPoint.x = endPoint.x + (this.options.clockwise ? -0.01 : +0.01);
            }
            // largeArcFlag and sweepFlag
            let largeArcFlag, sweepFlag;
            if (circlePercent > 50) {
                [largeArcFlag, sweepFlag] = this.options.clockwise ? [1, 1] : [1, 0];
            }
            else {
                [largeArcFlag, sweepFlag] = this.options.clockwise ? [0, 1] : [0, 0];
            }
            // percent may not equal the actual percent
            let titlePercent = this.options.animateTitle ? percent : this.options.percent;
            let titleTextPercent = titlePercent > this.options.maxPercent ?
                `${this.options.maxPercent.toFixed(this.options.toFixed)}+` : titlePercent.toFixed(this.options.toFixed);
            let subtitlePercent = this.options.animateSubtitle ? percent : this.options.percent;
            // get title object
            let title = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: this.options.titleColor,
                fontSize: this.options.titleFontSize,
                fontWeight: this.options.titleFontWeight,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both title and titleFormat(...) may be an array of string.
            if (this.options.titleFormat !== undefined && this.options.titleFormat.constructor.name === 'Function') {
                let formatted = this.options.titleFormat(titlePercent);
                if (formatted instanceof Array) {
                    title.texts = [...formatted];
                }
                else {
                    title.texts.push(formatted.toString());
                }
            }
            else {
                if (this.options.title === 'auto') {
                    title.texts.push(titleTextPercent);
                }
                else {
                    if (this.options.title instanceof Array) {
                        title.texts = [...this.options.title];
                    }
                    else {
                        title.texts.push(this.options.title.toString());
                    }
                }
            }
            // get subtitle object
            let subtitle = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: this.options.subtitleColor,
                fontSize: this.options.subtitleFontSize,
                fontWeight: this.options.subtitleFontWeight,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both subtitle and subtitleFormat(...) may be an array of string.
            if (this.options.subtitleFormat !== undefined && this.options.subtitleFormat.constructor.name === 'Function') {
                let formatted = this.options.subtitleFormat(subtitlePercent);
                if (formatted instanceof Array) {
                    subtitle.texts = [...formatted];
                }
                else {
                    subtitle.texts.push(formatted.toString());
                }
            }
            else {
                if (this.options.subtitle instanceof Array) {
                    subtitle.texts = [...this.options.subtitle];
                }
                else {
                    subtitle.texts.push(this.options.subtitle.toString());
                }
            }
            // get units object
            let units = {
                text: `${this.options.units}`,
                fontSize: this.options.unitsFontSize,
                fontWeight: this.options.unitsFontWeight,
                color: this.options.unitsColor
            };
            // get total count of text lines to be shown
            let rowCount = 0, rowNum = 1;
            this.options.showTitle && (rowCount += title.texts.length);
            this.options.showSubtitle && (rowCount += subtitle.texts.length);
            // calc dy for each tspan for title
            if (this.options.showTitle) {
                for (let span of title.texts) {
                    title.tspans.push({ span: span, dy: this.getRelativeY(rowNum, rowCount) });
                    rowNum++;
                }
            }
            // calc dy for each tspan for subtitle
            if (this.options.showSubtitle) {
                for (let span of subtitle.texts) {
                    subtitle.tspans.push({ span: span, dy: this.getRelativeY(rowNum, rowCount) });
                    rowNum++;
                }
            }
            // create ID for gradient element
            if (null === this._gradientUUID) {
                this._gradientUUID = this.uuid();
            }
            // Bring it all together
            this.svg = {
                viewBox: `0 0 ${boxSize} ${boxSize}`,
                // Set both width and height to '100%' if it's responsive
                width: this.options.responsive ? '100%' : boxSize,
                height: this.options.responsive ? '100%' : boxSize,
                backgroundCircle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: this.options.radius + this.options.outerStrokeWidth / 2 + this.options.backgroundPadding,
                    fill: this.options.backgroundColor,
                    fillOpacity: this.options.backgroundOpacity,
                    stroke: this.options.backgroundStroke,
                    strokeWidth: this.options.backgroundStrokeWidth,
                },
                path: {
                    // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
                    d: `M ${startPoint.x} ${startPoint.y}
        A ${this.options.radius} ${this.options.radius} 0 ${largeArcFlag} ${sweepFlag} ${endPoint.x} ${endPoint.y}`,
                    stroke: this.options.outerStrokeColor,
                    strokeWidth: this.options.outerStrokeWidth,
                    strokeLinecap: this.options.outerStrokeLinecap,
                    fill: 'none'
                },
                circle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: this.options.radius - this.options.space - this.options.outerStrokeWidth / 2 - this.options.innerStrokeWidth / 2,
                    fill: 'none',
                    stroke: this.options.innerStrokeColor,
                    strokeWidth: this.options.innerStrokeWidth,
                },
                title: title,
                units: units,
                subtitle: subtitle,
                image: {
                    x: centre.x - this.options.imageWidth / 2,
                    y: centre.y - this.options.imageHeight / 2,
                    src: this.options.imageSrc,
                    width: this.options.imageWidth,
                    height: this.options.imageHeight,
                },
                outerLinearGradient: {
                    id: 'outer-linear-' + this._gradientUUID,
                    colorStop1: this.options.outerStrokeColor,
                    colorStop2: this.options.outerStrokeGradientStopColor === 'transparent' ? '#FFF' : this.options.outerStrokeGradientStopColor,
                },
                radialGradient: {
                    id: 'radial-' + this._gradientUUID,
                    colorStop1: this.options.backgroundColor,
                    colorStop2: this.options.backgroundGradientStopColor === 'transparent' ? '#FFF' : this.options.backgroundGradientStopColor,
                }
            };
        };
        this.getAnimationParameters = (previousPercent, currentPercent) => {
            const MIN_INTERVAL = 10;
            let times, step, interval;
            let fromPercent = this.options.startFromZero ? 0 : (previousPercent < 0 ? 0 : previousPercent);
            let toPercent = currentPercent < 0 ? 0 : this.min(currentPercent, this.options.maxPercent);
            let delta = Math.abs(Math.round(toPercent - fromPercent));
            if (delta >= 100) {
                // we will finish animation in 100 times
                times = 100;
                if (!this.options.animateTitle && !this.options.animateSubtitle) {
                    step = 1;
                }
                else {
                    // show title or subtitle animation even if the arc is full, we also need to finish it in 100 times.
                    step = Math.round(delta / times);
                }
            }
            else {
                // we will finish in as many times as the number of percent.
                times = delta;
                step = 1;
            }
            // Get the interval of timer
            interval = Math.round(this.options.animationDuration / times);
            // Readjust all values if the interval of timer is extremely small.
            if (interval < MIN_INTERVAL) {
                interval = MIN_INTERVAL;
                times = this.options.animationDuration / interval;
                if (!this.options.animateTitle && !this.options.animateSubtitle && delta > 100) {
                    step = Math.round(100 / times);
                }
                else {
                    step = Math.round(delta / times);
                }
            }
            // step must be greater than 0.
            if (step < 1) {
                step = 1;
            }
            return { times: times, step: step, interval: interval };
        };
        this.animate = (previousPercent, currentPercent) => {
            if (this._timerSubscription && !this._timerSubscription.closed) {
                this._timerSubscription.unsubscribe();
            }
            let fromPercent = this.options.startFromZero ? 0 : previousPercent;
            let toPercent = currentPercent;
            let { step: step, interval: interval } = this.getAnimationParameters(fromPercent, toPercent);
            let count = fromPercent;
            if (fromPercent < toPercent) {
                this._timerSubscription = timer(0, interval).subscribe(() => {
                    count += step;
                    if (count <= toPercent) {
                        if (!this.options.animateTitle && !this.options.animateSubtitle && count >= 100) {
                            this.draw(toPercent);
                            this._timerSubscription.unsubscribe();
                        }
                        else {
                            this.draw(count);
                        }
                    }
                    else {
                        this.draw(toPercent);
                        this._timerSubscription.unsubscribe();
                    }
                });
            }
            else {
                this._timerSubscription = timer(0, interval).subscribe(() => {
                    count -= step;
                    if (count >= toPercent) {
                        if (!this.options.animateTitle && !this.options.animateSubtitle && toPercent >= 100) {
                            this.draw(toPercent);
                            this._timerSubscription.unsubscribe();
                        }
                        else {
                            this.draw(count);
                        }
                    }
                    else {
                        this.draw(toPercent);
                        this._timerSubscription.unsubscribe();
                    }
                });
            }
        };
        this.applyOptions = () => {
            // the options of <circle-progress> may change already
            for (let name of Object.keys(this.options)) {
                if (this.hasOwnProperty(name) && this[name] !== undefined) {
                    this.options[name] = this[name];
                }
                else if (this.templateOptions && this.templateOptions[name] !== undefined) {
                    this.options[name] = this.templateOptions[name];
                }
            }
            // make sure key options valid
            this.options.radius = Math.abs(+this.options.radius);
            this.options.space = +this.options.space;
            this.options.percent = +this.options.percent > 0 ? +this.options.percent : 0;
            this.options.maxPercent = Math.abs(+this.options.maxPercent);
            this.options.animationDuration = Math.abs(this.options.animationDuration);
            this.options.outerStrokeWidth = Math.abs(+this.options.outerStrokeWidth);
            this.options.innerStrokeWidth = Math.abs(+this.options.innerStrokeWidth);
            this.options.backgroundPadding = +this.options.backgroundPadding;
        };
        this.getRelativeY = (rowNum, rowCount) => {
            // why '-0.18em'? It's a magic number when property 'alignment-baseline' equals 'baseline'. :)
            let initialOffset = -0.18, offset = 1;
            return (initialOffset + offset * (rowNum - rowCount / 2)).toFixed(2) + 'em';
        };
        this.min = (a, b) => {
            return a < b ? a : b;
        };
        this.max = (a, b) => {
            return a > b ? a : b;
        };
        this.uuid = () => {
            // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
            var dt = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        };
        this.checkViewport = () => {
            this.findSvgElement();
            let previousValue = this.isInViewport;
            this.isInViewport = this.isElementInViewport(this.svgElement);
            if (previousValue !== this.isInViewport && this.onViewportChanged.observers.length > 0) {
                this.ngZone.run(() => {
                    this.onViewportChanged.emit({ oldValue: previousValue, newValue: this.isInViewport });
                });
            }
        };
        this.onScroll = (event) => {
            this.checkViewport();
        };
        this.loadEventsForLazyMode = () => {
            if (this.options.lazy) {
                this.ngZone.runOutsideAngular(() => {
                    this.document.addEventListener('scroll', this.onScroll, true);
                    this.window.addEventListener('resize', this.onScroll, true);
                });
                if (this._viewportChangedSubscriber === null) {
                    this._viewportChangedSubscriber = this.onViewportChanged.subscribe(({ oldValue, newValue }) => {
                        newValue ? this.render() : null;
                    });
                }
                // svgElement must be created in DOM before being checked.
                // Is there a better way to check the existence of svgElemnt?
                let _timer = timer(0, 50).subscribe(() => {
                    this.svgElement === null ? this.checkViewport() : _timer.unsubscribe();
                });
            }
        };
        this.unloadEventsForLazyMode = () => {
            // Remove event listeners
            this.document.removeEventListener('scroll', this.onScroll, true);
            this.window.removeEventListener('resize', this.onScroll, true);
            // Unsubscribe onViewportChanged
            if (this._viewportChangedSubscriber !== null) {
                this._viewportChangedSubscriber.unsubscribe();
                this._viewportChangedSubscriber = null;
            }
        };
        this.document = injector.get(DOCUMENT);
        this.window = this.document.defaultView;
        Object.assign(this.options, defaultOptions);
        Object.assign(this.defaultOptions, defaultOptions);
    }
    emitClickEvent(event) {
        if (this.options.renderOnClick) {
            this.animate(0, this.options.percent);
        }
        if (this.onClick.observers.length > 0) {
            this.onClick.emit(event);
        }
    }
    isDrawing() {
        return (this._timerSubscription && !this._timerSubscription.closed);
    }
    findSvgElement() {
        if (this.svgElement === null) {
            let tags = this.elRef.nativeElement.getElementsByTagName('svg');
            if (tags.length > 0) {
                this.svgElement = tags[0];
            }
        }
    }
    isElementInViewport(el) {
        // Return false if el has not been created in page.
        if (el === null || el === undefined)
            return false;
        // Check if the element is out of view due to a container scrolling
        let rect = el.getBoundingClientRect(), parent = el.parentNode, parentRect;
        do {
            parentRect = parent.getBoundingClientRect();
            if (rect.top >= parentRect.bottom)
                return false;
            if (rect.bottom <= parentRect.top)
                return false;
            if (rect.left >= parentRect.right)
                return false;
            if (rect.right <= parentRect.left)
                return false;
            parent = parent.parentNode;
        } while (parent != this.document.body);
        // Check its within the document viewport
        if (rect.top >= (this.window.innerHeight || this.document.documentElement.clientHeight))
            return false;
        if (rect.bottom <= 0)
            return false;
        if (rect.left >= (this.window.innerWidth || this.document.documentElement.clientWidth))
            return false;
        if (rect.right <= 0)
            return false;
        return true;
    }
    ngOnInit() {
        this.loadEventsForLazyMode();
    }
    ngOnDestroy() {
        this.unloadEventsForLazyMode();
    }
    ngOnChanges(changes) {
        this.render();
        if ('lazy' in changes) {
            changes.lazy.currentValue ? this.loadEventsForLazyMode() : this.unloadEventsForLazyMode();
        }
    }
}
CircleProgressComponent.ɵfac = function CircleProgressComponent_Factory(t) { return new (t || CircleProgressComponent)(i0.ɵɵdirectiveInject(CircleProgressOptions), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Injector)); };
CircleProgressComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CircleProgressComponent, selectors: [["circle-progress"]], inputs: { name: "name", class: "class", backgroundGradient: "backgroundGradient", backgroundColor: "backgroundColor", backgroundGradientStopColor: "backgroundGradientStopColor", backgroundOpacity: "backgroundOpacity", backgroundStroke: "backgroundStroke", backgroundStrokeWidth: "backgroundStrokeWidth", backgroundPadding: "backgroundPadding", radius: "radius", space: "space", percent: "percent", toFixed: "toFixed", maxPercent: "maxPercent", renderOnClick: "renderOnClick", units: "units", unitsFontSize: "unitsFontSize", unitsFontWeight: "unitsFontWeight", unitsColor: "unitsColor", outerStrokeGradient: "outerStrokeGradient", outerStrokeWidth: "outerStrokeWidth", outerStrokeColor: "outerStrokeColor", outerStrokeGradientStopColor: "outerStrokeGradientStopColor", outerStrokeLinecap: "outerStrokeLinecap", innerStrokeColor: "innerStrokeColor", innerStrokeWidth: "innerStrokeWidth", titleFormat: "titleFormat", title: "title", titleColor: "titleColor", titleFontSize: "titleFontSize", titleFontWeight: "titleFontWeight", subtitleFormat: "subtitleFormat", subtitle: "subtitle", subtitleColor: "subtitleColor", subtitleFontSize: "subtitleFontSize", subtitleFontWeight: "subtitleFontWeight", imageSrc: "imageSrc", imageHeight: "imageHeight", imageWidth: "imageWidth", animation: "animation", animateTitle: "animateTitle", animateSubtitle: "animateSubtitle", animationDuration: "animationDuration", showTitle: "showTitle", showSubtitle: "showSubtitle", showUnits: "showUnits", showImage: "showImage", showBackground: "showBackground", showInnerStroke: "showInnerStroke", clockwise: "clockwise", responsive: "responsive", startFromZero: "startFromZero", showZeroOuterStroke: "showZeroOuterStroke", lazy: "lazy", templateOptions: ["options", "templateOptions"] }, outputs: { onClick: "onClick" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid meet", 3, "click", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid meet", 3, "click"], [4, "ngIf"], ["alignment-baseline", "baseline", 4, "ngIf"], ["preserveAspectRatio", "none", 4, "ngIf"], ["offset", "5%"], ["offset", "95%"], ["alignment-baseline", "baseline"], [4, "ngFor", "ngForOf"], ["preserveAspectRatio", "none"]], template: function CircleProgressComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CircleProgressComponent__svg_svg_0_Template, 9, 11, "svg", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.svg);
    } }, directives: [i1.NgIf, i1.NgForOf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CircleProgressComponent, [{
        type: Component,
        args: [{
                selector: 'circle-progress',
                template: `
        <svg xmlns="http://www.w3.org/2000/svg" *ngIf="svg"
             [attr.viewBox]="svg.viewBox" preserveAspectRatio="xMidYMid meet"
             [attr.height]="svg.height" [attr.width]="svg.width" (click)="emitClickEvent($event)" [attr.class]="options.class">
            <defs>
                <linearGradient *ngIf="options.outerStrokeGradient" [attr.id]="svg.outerLinearGradient.id">
                    <stop offset="5%" [attr.stop-color]="svg.outerLinearGradient.colorStop1"  [attr.stop-opacity]="1"/>
                    <stop offset="95%" [attr.stop-color]="svg.outerLinearGradient.colorStop2" [attr.stop-opacity]="1"/>
                </linearGradient>
                <radialGradient *ngIf="options.backgroundGradient" [attr.id]="svg.radialGradient.id">
                    <stop offset="5%" [attr.stop-color]="svg.radialGradient.colorStop1" [attr.stop-opacity]="1"/>
                    <stop offset="95%" [attr.stop-color]="svg.radialGradient.colorStop2" [attr.stop-opacity]="1"/>
                </radialGradient>
            </defs>
            <ng-container *ngIf="options.showBackground">
                <circle *ngIf="!options.backgroundGradient"
                        [attr.cx]="svg.backgroundCircle.cx"
                        [attr.cy]="svg.backgroundCircle.cy"
                        [attr.r]="svg.backgroundCircle.r"
                        [attr.fill]="svg.backgroundCircle.fill"
                        [attr.fill-opacity]="svg.backgroundCircle.fillOpacity"
                        [attr.stroke]="svg.backgroundCircle.stroke"
                        [attr.stroke-width]="svg.backgroundCircle.strokeWidth"/>
                <circle *ngIf="options.backgroundGradient"
                        [attr.cx]="svg.backgroundCircle.cx"
                        [attr.cy]="svg.backgroundCircle.cy"
                        [attr.r]="svg.backgroundCircle.r"
                        attr.fill="url({{window.location.href}}#{{svg.radialGradient.id}})"
                        [attr.fill-opacity]="svg.backgroundCircle.fillOpacity"
                        [attr.stroke]="svg.backgroundCircle.stroke"
                        [attr.stroke-width]="svg.backgroundCircle.strokeWidth"/>
            </ng-container>            
            <circle *ngIf="options.showInnerStroke"
                    [attr.cx]="svg.circle.cx"
                    [attr.cy]="svg.circle.cy"
                    [attr.r]="svg.circle.r"
                    [attr.fill]="svg.circle.fill"
                    [attr.stroke]="svg.circle.stroke"
                    [attr.stroke-width]="svg.circle.strokeWidth"/>
            <ng-container *ngIf="+options.percent!==0 || options.showZeroOuterStroke">
                <path *ngIf="!options.outerStrokeGradient"
                        [attr.d]="svg.path.d"
                        [attr.stroke]="svg.path.stroke"
                        [attr.stroke-width]="svg.path.strokeWidth"
                        [attr.stroke-linecap]="svg.path.strokeLinecap"
                        [attr.fill]="svg.path.fill"/>
                <path *ngIf="options.outerStrokeGradient"
                        [attr.d]="svg.path.d"
                        attr.stroke="url({{window.location.href}}#{{svg.outerLinearGradient.id}})"
                        [attr.stroke-width]="svg.path.strokeWidth"
                        [attr.stroke-linecap]="svg.path.strokeLinecap"
                        [attr.fill]="svg.path.fill"/>
            </ng-container>
            <text *ngIf="!options.showImage && (options.showTitle || options.showUnits || options.showSubtitle)"
                  alignment-baseline="baseline"
                  [attr.x]="svg.circle.cx"
                  [attr.y]="svg.circle.cy"
                  [attr.text-anchor]="svg.title.textAnchor">
                <ng-container *ngIf="options.showTitle">
                    <tspan *ngFor="let tspan of svg.title.tspans"
                           [attr.x]="svg.title.x"
                           [attr.y]="svg.title.y"
                           [attr.dy]="tspan.dy"
                           [attr.font-size]="svg.title.fontSize"
                           [attr.font-weight]="svg.title.fontWeight"
                           [attr.fill]="svg.title.color">{{tspan.span}}</tspan>
                </ng-container>
                <tspan *ngIf="options.showUnits"
                       [attr.font-size]="svg.units.fontSize"
                       [attr.font-weight]="svg.units.fontWeight"
                       [attr.fill]="svg.units.color">{{svg.units.text}}</tspan>
                <ng-container *ngIf="options.showSubtitle">
                    <tspan *ngFor="let tspan of svg.subtitle.tspans"
                           [attr.x]="svg.subtitle.x"
                           [attr.y]="svg.subtitle.y"
                           [attr.dy]="tspan.dy"
                           [attr.font-size]="svg.subtitle.fontSize"
                           [attr.font-weight]="svg.subtitle.fontWeight"
                           [attr.fill]="svg.subtitle.color">{{tspan.span}}</tspan>
                </ng-container>
            </text>
            <image *ngIf="options.showImage" preserveAspectRatio="none" 
                [attr.height]="svg.image.height"
                [attr.width]="svg.image.width"
                [attr.xlink:href]="svg.image.src"
                [attr.x]="svg.image.x"
                [attr.y]="svg.image.y"
            />
        </svg>
    `
            }]
    }], function () { return [{ type: CircleProgressOptions }, { type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.Injector }]; }, { onClick: [{
            type: Output
        }], name: [{
            type: Input
        }], class: [{
            type: Input
        }], backgroundGradient: [{
            type: Input
        }], backgroundColor: [{
            type: Input
        }], backgroundGradientStopColor: [{
            type: Input
        }], backgroundOpacity: [{
            type: Input
        }], backgroundStroke: [{
            type: Input
        }], backgroundStrokeWidth: [{
            type: Input
        }], backgroundPadding: [{
            type: Input
        }], radius: [{
            type: Input
        }], space: [{
            type: Input
        }], percent: [{
            type: Input
        }], toFixed: [{
            type: Input
        }], maxPercent: [{
            type: Input
        }], renderOnClick: [{
            type: Input
        }], units: [{
            type: Input
        }], unitsFontSize: [{
            type: Input
        }], unitsFontWeight: [{
            type: Input
        }], unitsColor: [{
            type: Input
        }], outerStrokeGradient: [{
            type: Input
        }], outerStrokeWidth: [{
            type: Input
        }], outerStrokeColor: [{
            type: Input
        }], outerStrokeGradientStopColor: [{
            type: Input
        }], outerStrokeLinecap: [{
            type: Input
        }], innerStrokeColor: [{
            type: Input
        }], innerStrokeWidth: [{
            type: Input
        }], titleFormat: [{
            type: Input
        }], title: [{
            type: Input
        }], titleColor: [{
            type: Input
        }], titleFontSize: [{
            type: Input
        }], titleFontWeight: [{
            type: Input
        }], subtitleFormat: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], subtitleColor: [{
            type: Input
        }], subtitleFontSize: [{
            type: Input
        }], subtitleFontWeight: [{
            type: Input
        }], imageSrc: [{
            type: Input
        }], imageHeight: [{
            type: Input
        }], imageWidth: [{
            type: Input
        }], animation: [{
            type: Input
        }], animateTitle: [{
            type: Input
        }], animateSubtitle: [{
            type: Input
        }], animationDuration: [{
            type: Input
        }], showTitle: [{
            type: Input
        }], showSubtitle: [{
            type: Input
        }], showUnits: [{
            type: Input
        }], showImage: [{
            type: Input
        }], showBackground: [{
            type: Input
        }], showInnerStroke: [{
            type: Input
        }], clockwise: [{
            type: Input
        }], responsive: [{
            type: Input
        }], startFromZero: [{
            type: Input
        }], showZeroOuterStroke: [{
            type: Input
        }], lazy: [{
            type: Input
        }], templateOptions: [{
            type: Input,
            args: ['options']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2lyY2xlLXByb2dyZXNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNpcmNsZS1wcm9ncmVzcy9zcmMvbGliL25nLWNpcmNsZS1wcm9ncmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBa0UsTUFBTSxlQUFlLENBQUM7QUFDbEosT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBZ0IsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7OztJQXlIM0Isc0NBQTJGO0lBQ3ZGLDBCQUFtRyxjQUFBO0lBRXZHLGlCQUFpQjs7O0lBSG1DLHVEQUFzQztJQUNwRSxlQUFzRDtJQUF0RCx1RUFBc0QsbUJBQUE7SUFDckQsZUFBc0Q7SUFBdEQsdUVBQXNELG1CQUFBOzs7O0lBRTdFLHNDQUFxRjtJQUNqRiwwQkFBNkYsY0FBQTtJQUVqRyxpQkFBaUI7OztJQUhrQyxrREFBaUM7SUFDOUQsZUFBaUQ7SUFBakQsa0VBQWlELG1CQUFBO0lBQ2hELGVBQWlEO0lBQWpELGtFQUFpRCxtQkFBQTs7OztJQUl4RSx5QkFPZ0U7OztJQU54RCxvREFBbUMsc0NBQUEsb0NBQUEsMENBQUEseURBQUEsOENBQUEseURBQUE7Ozs7SUFPM0MseUJBT2dFOzs7SUFIeEQsK0dBQW1FO0lBSG5FLG9EQUFtQyxzQ0FBQSxvQ0FBQSx5REFBQSw4Q0FBQSx5REFBQTs7OztJQVYvQyw2QkFBNkM7SUFDekMsa0hBT2dFO0lBQ2hFLGtIQU9nRTtJQUNwRSwwQkFBZTs7O0lBaEJGLGVBQWlDO0lBQWpDLHlEQUFpQztJQVFqQyxlQUFnQztJQUFoQyx3REFBZ0M7Ozs7SUFTN0MseUJBTXNEOzs7SUFMOUMsMENBQXlCLDRCQUFBLDBCQUFBLGdDQUFBLG9DQUFBLCtDQUFB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ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmLCBTaW1wbGVDaGFuZ2VzLCBOZ1pvbmUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2lyY2xlUHJvZ3Jlc3NPcHRpb25zSW50ZXJmYWNlIHtcbiAgICBjbGFzcz86IHN0cmluZztcbiAgICBiYWNrZ3JvdW5kR3JhZGllbnQ/OiBib29sZWFuO1xuICAgIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcbiAgICBiYWNrZ3JvdW5kR3JhZGllbnRTdG9wQ29sb3I/OiBzdHJpbmc7XG4gICAgYmFja2dyb3VuZE9wYWNpdHk/OiBudW1iZXI7XG4gICAgYmFja2dyb3VuZFN0cm9rZT86IHN0cmluZztcbiAgICBiYWNrZ3JvdW5kU3Ryb2tlV2lkdGg/OiBudW1iZXI7XG4gICAgYmFja2dyb3VuZFBhZGRpbmc/OiBudW1iZXI7XG4gICAgcGVyY2VudD86IG51bWJlcjtcbiAgICByYWRpdXM/OiBudW1iZXI7XG4gICAgc3BhY2U/OiBudW1iZXI7XG4gICAgdG9GaXhlZD86IG51bWJlcjtcbiAgICBtYXhQZXJjZW50PzogbnVtYmVyO1xuICAgIHJlbmRlck9uQ2xpY2s/OiBib29sZWFuO1xuICAgIHVuaXRzPzogc3RyaW5nO1xuICAgIHVuaXRzRm9udFNpemU/OiBzdHJpbmc7XG4gICAgdW5pdHNGb250V2VpZ2h0Pzogc3RyaW5nO1xuICAgIHVuaXRzQ29sb3I/OiBzdHJpbmc7XG4gICAgb3V0ZXJTdHJva2VHcmFkaWVudD86IGJvb2xlYW47XG4gICAgb3V0ZXJTdHJva2VXaWR0aD86IG51bWJlcjtcbiAgICBvdXRlclN0cm9rZUNvbG9yPzogc3RyaW5nO1xuICAgIG91dGVyU3Ryb2tlR3JhZGllbnRTdG9wQ29sb3I/OiBzdHJpbmc7XG4gICAgb3V0ZXJTdHJva2VMaW5lY2FwPzogc3RyaW5nO1xuICAgIGlubmVyU3Ryb2tlQ29sb3I/OiBzdHJpbmc7XG4gICAgaW5uZXJTdHJva2VXaWR0aD86IG51bWJlcjtcbiAgICB0aXRsZUZvcm1hdD86IEZ1bmN0aW9uO1xuICAgIHRpdGxlPzogc3RyaW5nIHwgQXJyYXk8U3RyaW5nPjtcbiAgICB0aXRsZUNvbG9yPzogc3RyaW5nO1xuICAgIHRpdGxlRm9udFNpemU/OiBzdHJpbmc7XG4gICAgdGl0bGVGb250V2VpZ2h0Pzogc3RyaW5nO1xuICAgIHN1YnRpdGxlRm9ybWF0PzogRnVuY3Rpb247XG4gICAgc3VidGl0bGU/OiBzdHJpbmcgfCBBcnJheTxTdHJpbmc+O1xuICAgIHN1YnRpdGxlQ29sb3I/OiBzdHJpbmc7XG4gICAgc3VidGl0bGVGb250U2l6ZT86IHN0cmluZztcbiAgICBzdWJ0aXRsZUZvbnRXZWlnaHQ/OiBzdHJpbmc7XG4gICAgaW1hZ2VTcmM/OiBzdHJpbmc7XG4gICAgaW1hZ2VIZWlnaHQ/OiBudW1iZXI7XG4gICAgaW1hZ2VXaWR0aD86IG51bWJlcjtcbiAgICBhbmltYXRpb24/OiBib29sZWFuO1xuICAgIGFuaW1hdGVUaXRsZT86IGJvb2xlYW47XG4gICAgYW5pbWF0ZVN1YnRpdGxlPzogYm9vbGVhbjtcbiAgICBhbmltYXRpb25EdXJhdGlvbj86IG51bWJlcjtcbiAgICBzaG93VGl0bGU/OiBib29sZWFuO1xuICAgIHNob3dTdWJ0aXRsZT86IGJvb2xlYW47XG4gICAgc2hvd1VuaXRzPzogYm9vbGVhbjtcbiAgICBzaG93SW1hZ2U/OiBib29sZWFuO1xuICAgIHNob3dCYWNrZ3JvdW5kPzogYm9vbGVhbjtcbiAgICBzaG93SW5uZXJTdHJva2U/OiBib29sZWFuO1xuICAgIGNsb2Nrd2lzZT86IGJvb2xlYW47XG4gICAgcmVzcG9uc2l2ZT86IGJvb2xlYW47XG4gICAgc3RhcnRGcm9tWmVybz86IGJvb2xlYW47XG4gICAgc2hvd1plcm9PdXRlclN0cm9rZT86IGJvb2xlYW47XG4gICAgbGF6eT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBDaXJjbGVQcm9ncmVzc09wdGlvbnMgaW1wbGVtZW50cyBDaXJjbGVQcm9ncmVzc09wdGlvbnNJbnRlcmZhY2Uge1xuICAgIGNsYXNzID0gJyc7XG4gICAgYmFja2dyb3VuZEdyYWRpZW50ID0gZmFsc2U7XG4gICAgYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICBiYWNrZ3JvdW5kR3JhZGllbnRTdG9wQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIGJhY2tncm91bmRPcGFjaXR5ID0gMTtcbiAgICBiYWNrZ3JvdW5kU3Ryb2tlID0gJ3RyYW5zcGFyZW50JztcbiAgICBiYWNrZ3JvdW5kU3Ryb2tlV2lkdGggPSAwO1xuICAgIGJhY2tncm91bmRQYWRkaW5nID0gNTtcbiAgICBwZXJjZW50ID0gMDtcbiAgICByYWRpdXMgPSA5MDtcbiAgICBzcGFjZSA9IDQ7XG4gICAgdG9GaXhlZCA9IDA7XG4gICAgbWF4UGVyY2VudCA9IDEwMDA7XG4gICAgcmVuZGVyT25DbGljayA9IHRydWU7XG4gICAgdW5pdHMgPSAnJSc7XG4gICAgdW5pdHNGb250U2l6ZSA9ICcxMCc7XG4gICAgdW5pdHNGb250V2VpZ2h0ID0gJ25vcm1hbCc7XG4gICAgdW5pdHNDb2xvciA9ICcjNDQ0NDQ0JztcbiAgICBvdXRlclN0cm9rZUdyYWRpZW50ID0gZmFsc2U7XG4gICAgb3V0ZXJTdHJva2VXaWR0aCA9IDg7XG4gICAgb3V0ZXJTdHJva2VDb2xvciA9ICcjNzhDMDAwJztcbiAgICBvdXRlclN0cm9rZUdyYWRpZW50U3RvcENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICBvdXRlclN0cm9rZUxpbmVjYXAgPSAncm91bmQnO1xuICAgIGlubmVyU3Ryb2tlQ29sb3IgPSAnI0M3RTU5Nic7XG4gICAgaW5uZXJTdHJva2VXaWR0aCA9IDQ7XG4gICAgdGl0bGVGb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgdGl0bGU6IHN0cmluZyB8IEFycmF5PFN0cmluZz4gPSAnYXV0byc7XG4gICAgdGl0bGVDb2xvciA9ICcjNDQ0NDQ0JztcbiAgICB0aXRsZUZvbnRTaXplID0gJzIwJztcbiAgICB0aXRsZUZvbnRXZWlnaHQgPSAnbm9ybWFsJztcbiAgICBzdWJ0aXRsZUZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICBzdWJ0aXRsZTogc3RyaW5nIHwgQXJyYXk8U3RyaW5nPiA9ICdwcm9ncmVzcyc7XG4gICAgc3VidGl0bGVDb2xvciA9ICcjQTlBOUE5JztcbiAgICBzdWJ0aXRsZUZvbnRTaXplID0gJzEwJztcbiAgICBzdWJ0aXRsZUZvbnRXZWlnaHQgPSAnbm9ybWFsJztcbiAgICBpbWFnZVNyYyA9IHVuZGVmaW5lZDtcbiAgICBpbWFnZUhlaWdodCA9IDA7XG4gICAgaW1hZ2VXaWR0aCA9IDA7XG4gICAgYW5pbWF0aW9uID0gdHJ1ZTtcbiAgICBhbmltYXRlVGl0bGUgPSB0cnVlO1xuICAgIGFuaW1hdGVTdWJ0aXRsZSA9IGZhbHNlO1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uID0gNTAwO1xuICAgIHNob3dUaXRsZSA9IHRydWU7XG4gICAgc2hvd1N1YnRpdGxlID0gdHJ1ZTtcbiAgICBzaG93VW5pdHMgPSB0cnVlO1xuICAgIHNob3dJbWFnZSA9IGZhbHNlO1xuICAgIHNob3dCYWNrZ3JvdW5kID0gdHJ1ZTtcbiAgICBzaG93SW5uZXJTdHJva2UgPSB0cnVlO1xuICAgIGNsb2Nrd2lzZSA9IHRydWU7XG4gICAgcmVzcG9uc2l2ZSA9IGZhbHNlO1xuICAgIHN0YXJ0RnJvbVplcm8gPSB0cnVlO1xuICAgIHNob3daZXJvT3V0ZXJTdHJva2UgPSB0cnVlO1xuICAgIGxhenkgPSBmYWxzZTtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjaXJjbGUtcHJvZ3Jlc3MnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiICpuZ0lmPVwic3ZnXCJcbiAgICAgICAgICAgICBbYXR0ci52aWV3Qm94XT1cInN2Zy52aWV3Qm94XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIlxuICAgICAgICAgICAgIFthdHRyLmhlaWdodF09XCJzdmcuaGVpZ2h0XCIgW2F0dHIud2lkdGhdPVwic3ZnLndpZHRoXCIgKGNsaWNrKT1cImVtaXRDbGlja0V2ZW50KCRldmVudClcIiBbYXR0ci5jbGFzc109XCJvcHRpb25zLmNsYXNzXCI+XG4gICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgKm5nSWY9XCJvcHRpb25zLm91dGVyU3Ryb2tlR3JhZGllbnRcIiBbYXR0ci5pZF09XCJzdmcub3V0ZXJMaW5lYXJHcmFkaWVudC5pZFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI1JVwiIFthdHRyLnN0b3AtY29sb3JdPVwic3ZnLm91dGVyTGluZWFyR3JhZGllbnQuY29sb3JTdG9wMVwiICBbYXR0ci5zdG9wLW9wYWNpdHldPVwiMVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiOTUlXCIgW2F0dHIuc3RvcC1jb2xvcl09XCJzdmcub3V0ZXJMaW5lYXJHcmFkaWVudC5jb2xvclN0b3AyXCIgW2F0dHIuc3RvcC1vcGFjaXR5XT1cIjFcIi8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8cmFkaWFsR3JhZGllbnQgKm5nSWY9XCJvcHRpb25zLmJhY2tncm91bmRHcmFkaWVudFwiIFthdHRyLmlkXT1cInN2Zy5yYWRpYWxHcmFkaWVudC5pZFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI1JVwiIFthdHRyLnN0b3AtY29sb3JdPVwic3ZnLnJhZGlhbEdyYWRpZW50LmNvbG9yU3RvcDFcIiBbYXR0ci5zdG9wLW9wYWNpdHldPVwiMVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiOTUlXCIgW2F0dHIuc3RvcC1jb2xvcl09XCJzdmcucmFkaWFsR3JhZGllbnQuY29sb3JTdG9wMlwiIFthdHRyLnN0b3Atb3BhY2l0eV09XCIxXCIvPlxuICAgICAgICAgICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+XG4gICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwib3B0aW9ucy5zaG93QmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgKm5nSWY9XCIhb3B0aW9ucy5iYWNrZ3JvdW5kR3JhZGllbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuY3hdPVwic3ZnLmJhY2tncm91bmRDaXJjbGUuY3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuY3ldPVwic3ZnLmJhY2tncm91bmRDaXJjbGUuY3lcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIucl09XCJzdmcuYmFja2dyb3VuZENpcmNsZS5yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmZpbGxdPVwic3ZnLmJhY2tncm91bmRDaXJjbGUuZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5maWxsLW9wYWNpdHldPVwic3ZnLmJhY2tncm91bmRDaXJjbGUuZmlsbE9wYWNpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuc3Ryb2tlXT1cInN2Zy5iYWNrZ3JvdW5kQ2lyY2xlLnN0cm9rZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5zdHJva2Utd2lkdGhdPVwic3ZnLmJhY2tncm91bmRDaXJjbGUuc3Ryb2tlV2lkdGhcIi8+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSAqbmdJZj1cIm9wdGlvbnMuYmFja2dyb3VuZEdyYWRpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmN4XT1cInN2Zy5iYWNrZ3JvdW5kQ2lyY2xlLmN4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmN5XT1cInN2Zy5iYWNrZ3JvdW5kQ2lyY2xlLmN5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnJdPVwic3ZnLmJhY2tncm91bmRDaXJjbGUuclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyLmZpbGw9XCJ1cmwoe3t3aW5kb3cubG9jYXRpb24uaHJlZn19I3t7c3ZnLnJhZGlhbEdyYWRpZW50LmlkfX0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmZpbGwtb3BhY2l0eV09XCJzdmcuYmFja2dyb3VuZENpcmNsZS5maWxsT3BhY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5zdHJva2VdPVwic3ZnLmJhY2tncm91bmRDaXJjbGUuc3Ryb2tlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnN0cm9rZS13aWR0aF09XCJzdmcuYmFja2dyb3VuZENpcmNsZS5zdHJva2VXaWR0aFwiLz5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGNpcmNsZSAqbmdJZj1cIm9wdGlvbnMuc2hvd0lubmVyU3Ryb2tlXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuY3hdPVwic3ZnLmNpcmNsZS5jeFwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmN5XT1cInN2Zy5jaXJjbGUuY3lcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5yXT1cInN2Zy5jaXJjbGUuclwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmZpbGxdPVwic3ZnLmNpcmNsZS5maWxsXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuc3Ryb2tlXT1cInN2Zy5jaXJjbGUuc3Ryb2tlXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuc3Ryb2tlLXdpZHRoXT1cInN2Zy5jaXJjbGUuc3Ryb2tlV2lkdGhcIi8+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiK29wdGlvbnMucGVyY2VudCE9PTAgfHwgb3B0aW9ucy5zaG93WmVyb091dGVyU3Ryb2tlXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggKm5nSWY9XCIhb3B0aW9ucy5vdXRlclN0cm9rZUdyYWRpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmRdPVwic3ZnLnBhdGguZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5zdHJva2VdPVwic3ZnLnBhdGguc3Ryb2tlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnN0cm9rZS13aWR0aF09XCJzdmcucGF0aC5zdHJva2VXaWR0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5zdHJva2UtbGluZWNhcF09XCJzdmcucGF0aC5zdHJva2VMaW5lY2FwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmZpbGxdPVwic3ZnLnBhdGguZmlsbFwiLz5cbiAgICAgICAgICAgICAgICA8cGF0aCAqbmdJZj1cIm9wdGlvbnMub3V0ZXJTdHJva2VHcmFkaWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5kXT1cInN2Zy5wYXRoLmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ci5zdHJva2U9XCJ1cmwoe3t3aW5kb3cubG9jYXRpb24uaHJlZn19I3t7c3ZnLm91dGVyTGluZWFyR3JhZGllbnQuaWR9fSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuc3Ryb2tlLXdpZHRoXT1cInN2Zy5wYXRoLnN0cm9rZVdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnN0cm9rZS1saW5lY2FwXT1cInN2Zy5wYXRoLnN0cm9rZUxpbmVjYXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuZmlsbF09XCJzdmcucGF0aC5maWxsXCIvPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8dGV4dCAqbmdJZj1cIiFvcHRpb25zLnNob3dJbWFnZSAmJiAob3B0aW9ucy5zaG93VGl0bGUgfHwgb3B0aW9ucy5zaG93VW5pdHMgfHwgb3B0aW9ucy5zaG93U3VidGl0bGUpXCJcbiAgICAgICAgICAgICAgICAgIGFsaWdubWVudC1iYXNlbGluZT1cImJhc2VsaW5lXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLnhdPVwic3ZnLmNpcmNsZS5jeFwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci55XT1cInN2Zy5jaXJjbGUuY3lcIlxuICAgICAgICAgICAgICAgICAgW2F0dHIudGV4dC1hbmNob3JdPVwic3ZnLnRpdGxlLnRleHRBbmNob3JcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwib3B0aW9ucy5zaG93VGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRzcGFuICpuZ0Zvcj1cImxldCB0c3BhbiBvZiBzdmcudGl0bGUudHNwYW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnhdPVwic3ZnLnRpdGxlLnhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIueV09XCJzdmcudGl0bGUueVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5keV09XCJ0c3Bhbi5keVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5mb250LXNpemVdPVwic3ZnLnRpdGxlLmZvbnRTaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmZvbnQtd2VpZ2h0XT1cInN2Zy50aXRsZS5mb250V2VpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmZpbGxdPVwic3ZnLnRpdGxlLmNvbG9yXCI+e3t0c3Bhbi5zcGFufX08L3RzcGFuPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDx0c3BhbiAqbmdJZj1cIm9wdGlvbnMuc2hvd1VuaXRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuZm9udC1zaXplXT1cInN2Zy51bml0cy5mb250U2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmZvbnQtd2VpZ2h0XT1cInN2Zy51bml0cy5mb250V2VpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuZmlsbF09XCJzdmcudW5pdHMuY29sb3JcIj57e3N2Zy51bml0cy50ZXh0fX08L3RzcGFuPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcHRpb25zLnNob3dTdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dHNwYW4gKm5nRm9yPVwibGV0IHRzcGFuIG9mIHN2Zy5zdWJ0aXRsZS50c3BhbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIueF09XCJzdmcuc3VidGl0bGUueFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci55XT1cInN2Zy5zdWJ0aXRsZS55XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmR5XT1cInRzcGFuLmR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmZvbnQtc2l6ZV09XCJzdmcuc3VidGl0bGUuZm9udFNpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuZm9udC13ZWlnaHRdPVwic3ZnLnN1YnRpdGxlLmZvbnRXZWlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuZmlsbF09XCJzdmcuc3VidGl0bGUuY29sb3JcIj57e3RzcGFuLnNwYW59fTwvdHNwYW4+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICA8aW1hZ2UgKm5nSWY9XCJvcHRpb25zLnNob3dJbWFnZVwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCIgXG4gICAgICAgICAgICAgICAgW2F0dHIuaGVpZ2h0XT1cInN2Zy5pbWFnZS5oZWlnaHRcIlxuICAgICAgICAgICAgICAgIFthdHRyLndpZHRoXT1cInN2Zy5pbWFnZS53aWR0aFwiXG4gICAgICAgICAgICAgICAgW2F0dHIueGxpbms6aHJlZl09XCJzdmcuaW1hZ2Uuc3JjXCJcbiAgICAgICAgICAgICAgICBbYXR0ci54XT1cInN2Zy5pbWFnZS54XCJcbiAgICAgICAgICAgICAgICBbYXR0ci55XT1cInN2Zy5pbWFnZS55XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2lyY2xlUHJvZ3Jlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuXG4gICAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYmFja2dyb3VuZEdyYWRpZW50OiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGJhY2tncm91bmRHcmFkaWVudFN0b3BDb2xvcjogU3RyaW5nO1xuICAgIEBJbnB1dCgpIGJhY2tncm91bmRPcGFjaXR5OiBudW1iZXI7XG4gICAgQElucHV0KCkgYmFja2dyb3VuZFN0cm9rZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGJhY2tncm91bmRTdHJva2VXaWR0aDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIGJhY2tncm91bmRQYWRkaW5nOiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSByYWRpdXM6IG51bWJlcjtcbiAgICBASW5wdXQoKSBzcGFjZTogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHBlcmNlbnQ6IG51bWJlcjtcbiAgICBASW5wdXQoKSB0b0ZpeGVkOiBudW1iZXI7XG4gICAgQElucHV0KCkgbWF4UGVyY2VudDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHJlbmRlck9uQ2xpY2s6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSB1bml0czogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHVuaXRzRm9udFNpemU6IHN0cmluZztcbiAgICBASW5wdXQoKSB1bml0c0ZvbnRXZWlnaHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSB1bml0c0NvbG9yOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBvdXRlclN0cm9rZUdyYWRpZW50OiBib29sZWFuO1xuICAgIEBJbnB1dCgpIG91dGVyU3Ryb2tlV2lkdGg6IG51bWJlcjtcbiAgICBASW5wdXQoKSBvdXRlclN0cm9rZUNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgb3V0ZXJTdHJva2VHcmFkaWVudFN0b3BDb2xvcjogU3RyaW5nO1xuICAgIEBJbnB1dCgpIG91dGVyU3Ryb2tlTGluZWNhcDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgaW5uZXJTdHJva2VDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGlubmVyU3Ryb2tlV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIHRpdGxlRm9ybWF0OiBGdW5jdGlvbjtcbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgQXJyYXk8U3RyaW5nPjtcbiAgICBASW5wdXQoKSB0aXRsZUNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdGl0bGVGb250U2l6ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRpdGxlRm9udFdlaWdodDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgc3VidGl0bGVGb3JtYXQ6IEZ1bmN0aW9uO1xuICAgIEBJbnB1dCgpIHN1YnRpdGxlOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICBASW5wdXQoKSBzdWJ0aXRsZUNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc3VidGl0bGVGb250U2l6ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHN1YnRpdGxlRm9udFdlaWdodDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgaW1hZ2VTcmM6IHN0cmluZztcbiAgICBASW5wdXQoKSBpbWFnZUhlaWdodDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIGltYWdlV2lkdGg6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIGFuaW1hdGlvbjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBhbmltYXRlVGl0bGU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgYW5pbWF0ZVN1YnRpdGxlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGFuaW1hdGlvbkR1cmF0aW9uOiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBzaG93VGl0bGU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc2hvd1N1YnRpdGxlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHNob3dVbml0czogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzaG93SW1hZ2U6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc2hvd0JhY2tncm91bmQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc2hvd0lubmVyU3Ryb2tlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGNsb2Nrd2lzZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSByZXNwb25zaXZlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHN0YXJ0RnJvbVplcm86IGJvb2xlYW47XG4gICAgQElucHV0KCkgc2hvd1plcm9PdXRlclN0cm9rZTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGxhenk6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoJ29wdGlvbnMnKSB0ZW1wbGF0ZU9wdGlvbnM6IENpcmNsZVByb2dyZXNzT3B0aW9ucztcblxuICAgIC8vIDxzdmc+IG9mIGNvbXBvbmVudFxuICAgIHN2Z0VsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbDtcbiAgICAvLyB3aGV0aGVyIDxzdmc+IGlzIGluIHZpZXdwb3J0XG4gICAgaXNJblZpZXdwb3J0OiBCb29sZWFuID0gZmFsc2U7XG4gICAgLy8gZXZlbnQgZm9yIG5vdGlmeWluZyB2aWV3cG9ydCBjaGFuZ2UgY2F1c2VkIGJ5IHNjcm9sbGluZyBvciByZXNpemluZ1xuICAgIG9uVmlld3BvcnRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8eyBvbGRWYWx1ZTogQm9vbGVhbiwgbmV3VmFsdWU6IEJvb2xlYW4gfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgd2luZG93OiBXaW5kb3c7XG4gICAgX3ZpZXdwb3J0Q2hhbmdlZFN1YnNjcmliZXI6IFN1YnNjcmlwdGlvbiA9IG51bGw7XG5cbiAgICBzdmc6IGFueTtcblxuICAgIG9wdGlvbnM6IENpcmNsZVByb2dyZXNzT3B0aW9ucyA9IG5ldyBDaXJjbGVQcm9ncmVzc09wdGlvbnMoKTtcbiAgICBkZWZhdWx0T3B0aW9uczogQ2lyY2xlUHJvZ3Jlc3NPcHRpb25zID0gbmV3IENpcmNsZVByb2dyZXNzT3B0aW9ucygpO1xuICAgIF9sYXN0UGVyY2VudDogbnVtYmVyID0gMDtcbiAgICBfZ3JhZGllbnRVVUlEOiBzdHJpbmcgPSBudWxsO1xuICAgIHJlbmRlciA9ICgpID0+IHtcblxuICAgICAgICB0aGlzLmFwcGx5T3B0aW9ucygpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubGF6eSkge1xuICAgICAgICAgICAgLy8gRHJhdyBzdmcgaWYgaXQgZG9lc24ndCBleGlzdFxuICAgICAgICAgICAgdGhpcy5zdmdFbGVtZW50ID09PSBudWxsICYmIHRoaXMuZHJhdyh0aGlzLl9sYXN0UGVyY2VudCk7XG4gICAgICAgICAgICAvLyBEcmF3IGl0IG9ubHkgd2hlbiBpdCdzIGluIHRoZSB2aWV3cG9ydFxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJblZpZXdwb3J0KSB7XG4gICAgICAgICAgICAgICAgLy8gRHJhdyBpdCBhdCB0aGUgbGF0ZXN0IHBvc2l0aW9uIHdoZW4gSSBhbSBpbi5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGlvbiAmJiB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSh0aGlzLl9sYXN0UGVyY2VudCwgdGhpcy5vcHRpb25zLnBlcmNlbnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhdyh0aGlzLm9wdGlvbnMucGVyY2VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RQZXJjZW50ID0gdGhpcy5vcHRpb25zLnBlcmNlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGlvbiAmJiB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlKHRoaXMuX2xhc3RQZXJjZW50LCB0aGlzLm9wdGlvbnMucGVyY2VudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhdyh0aGlzLm9wdGlvbnMucGVyY2VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9sYXN0UGVyY2VudCA9IHRoaXMub3B0aW9ucy5wZXJjZW50O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBwb2xhclRvQ2FydGVzaWFuID0gKGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgYW5nbGVJbkRlZ3JlZXM6IG51bWJlcikgPT4ge1xuICAgICAgICBsZXQgYW5nbGVJblJhZGl1cyA9IGFuZ2xlSW5EZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgbGV0IHggPSBjZW50ZXJYICsgTWF0aC5zaW4oYW5nbGVJblJhZGl1cykgKiByYWRpdXM7XG4gICAgICAgIGxldCB5ID0gY2VudGVyWSAtIE1hdGguY29zKGFuZ2xlSW5SYWRpdXMpICogcmFkaXVzO1xuICAgICAgICByZXR1cm4geyB4OiB4LCB5OiB5IH07XG4gICAgfTtcbiAgICBkcmF3ID0gKHBlcmNlbnQ6IG51bWJlcikgPT4ge1xuICAgICAgICAvLyBtYWtlIHBlcmNlbnQgcmVhc29uYWJsZVxuICAgICAgICBwZXJjZW50ID0gKHBlcmNlbnQgPT09IHVuZGVmaW5lZCkgPyB0aGlzLm9wdGlvbnMucGVyY2VudCA6IE1hdGguYWJzKHBlcmNlbnQpO1xuICAgICAgICAvLyBjaXJjbGUgcGVyY2VudCBzaG91bGRuJ3QgYmUgZ3JlYXRlciB0aGFuIDEwMCUuXG4gICAgICAgIGxldCBjaXJjbGVQZXJjZW50ID0gKHBlcmNlbnQgPiAxMDApID8gMTAwIDogcGVyY2VudDtcbiAgICAgICAgLy8gZGV0ZXJtaW5lIGJveCBzaXplXG4gICAgICAgIGxldCBib3hTaXplID0gdGhpcy5vcHRpb25zLnJhZGl1cyAqIDIgKyB0aGlzLm9wdGlvbnMub3V0ZXJTdHJva2VXaWR0aCAqIDI7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd0JhY2tncm91bmQpIHtcbiAgICAgICAgICAgIGJveFNpemUgKz0gKHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kU3Ryb2tlV2lkdGggKiAyICsgdGhpcy5tYXgoMCwgdGhpcy5vcHRpb25zLmJhY2tncm91bmRQYWRkaW5nICogMikpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoZSBjZW50cmUgb2YgdGhlIGNpcmNsZVxuICAgICAgICBsZXQgY2VudHJlID0geyB4OiBib3hTaXplIC8gMiwgeTogYm94U2l6ZSAvIDIgfTtcbiAgICAgICAgLy8gdGhlIHN0YXJ0IHBvaW50IG9mIHRoZSBhcmNcbiAgICAgICAgbGV0IHN0YXJ0UG9pbnQgPSB7IHg6IGNlbnRyZS54LCB5OiBjZW50cmUueSAtIHRoaXMub3B0aW9ucy5yYWRpdXMgfTtcbiAgICAgICAgLy8gZ2V0IHRoZSBlbmQgcG9pbnQgb2YgdGhlIGFyY1xuICAgICAgICBsZXQgZW5kUG9pbnQgPSB0aGlzLnBvbGFyVG9DYXJ0ZXNpYW4oY2VudHJlLngsIGNlbnRyZS55LCB0aGlzLm9wdGlvbnMucmFkaXVzLCAzNjAgKiAodGhpcy5vcHRpb25zLmNsb2Nrd2lzZSA/XG4gICAgICAgICAgICBjaXJjbGVQZXJjZW50IDpcbiAgICAgICAgICAgICgxMDAgLSBjaXJjbGVQZXJjZW50KSkgLyAxMDApOyAgLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiAgICAgICAgLy8gV2UnbGwgZ2V0IGFuIGVuZCBwb2ludCB3aXRoIHRoZSBzYW1lIFt4LCB5XSBhcyB0aGUgc3RhcnQgcG9pbnQgd2hlbiBwZXJjZW50IGlzIDEwMCUsIHNvIG1vdmUgeCBhIGxpdHRsZSBiaXQuXG4gICAgICAgIGlmIChjaXJjbGVQZXJjZW50ID09PSAxMDApIHtcbiAgICAgICAgICAgIGVuZFBvaW50LnggPSBlbmRQb2ludC54ICsgKHRoaXMub3B0aW9ucy5jbG9ja3dpc2UgPyAtMC4wMSA6ICswLjAxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsYXJnZUFyY0ZsYWcgYW5kIHN3ZWVwRmxhZ1xuICAgICAgICBsZXQgbGFyZ2VBcmNGbGFnOiBhbnksIHN3ZWVwRmxhZzogYW55O1xuICAgICAgICBpZiAoY2lyY2xlUGVyY2VudCA+IDUwKSB7XG4gICAgICAgICAgICBbbGFyZ2VBcmNGbGFnLCBzd2VlcEZsYWddID0gdGhpcy5vcHRpb25zLmNsb2Nrd2lzZSA/IFsxLCAxXSA6IFsxLCAwXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFtsYXJnZUFyY0ZsYWcsIHN3ZWVwRmxhZ10gPSB0aGlzLm9wdGlvbnMuY2xvY2t3aXNlID8gWzAsIDFdIDogWzAsIDBdO1xuICAgICAgICB9XG4gICAgICAgIC8vIHBlcmNlbnQgbWF5IG5vdCBlcXVhbCB0aGUgYWN0dWFsIHBlcmNlbnRcbiAgICAgICAgbGV0IHRpdGxlUGVyY2VudCA9IHRoaXMub3B0aW9ucy5hbmltYXRlVGl0bGUgPyBwZXJjZW50IDogdGhpcy5vcHRpb25zLnBlcmNlbnQ7XG4gICAgICAgIGxldCB0aXRsZVRleHRQZXJjZW50ID0gdGl0bGVQZXJjZW50ID4gdGhpcy5vcHRpb25zLm1heFBlcmNlbnQgP1xuICAgICAgICAgICAgYCR7dGhpcy5vcHRpb25zLm1heFBlcmNlbnQudG9GaXhlZCh0aGlzLm9wdGlvbnMudG9GaXhlZCl9K2AgOiB0aXRsZVBlcmNlbnQudG9GaXhlZCh0aGlzLm9wdGlvbnMudG9GaXhlZCk7XG4gICAgICAgIGxldCBzdWJ0aXRsZVBlcmNlbnQgPSB0aGlzLm9wdGlvbnMuYW5pbWF0ZVN1YnRpdGxlID8gcGVyY2VudCA6IHRoaXMub3B0aW9ucy5wZXJjZW50O1xuICAgICAgICAvLyBnZXQgdGl0bGUgb2JqZWN0XG4gICAgICAgIGxldCB0aXRsZSA9IHtcbiAgICAgICAgICAgIHg6IGNlbnRyZS54LFxuICAgICAgICAgICAgeTogY2VudHJlLnksXG4gICAgICAgICAgICB0ZXh0QW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLm9wdGlvbnMudGl0bGVDb2xvcixcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLm9wdGlvbnMudGl0bGVGb250U2l6ZSxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IHRoaXMub3B0aW9ucy50aXRsZUZvbnRXZWlnaHQsXG4gICAgICAgICAgICB0ZXh0czogW10sXG4gICAgICAgICAgICB0c3BhbnM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIGZyb20gdjAuOS45LCBib3RoIHRpdGxlIGFuZCB0aXRsZUZvcm1hdCguLi4pIG1heSBiZSBhbiBhcnJheSBvZiBzdHJpbmcuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudGl0bGVGb3JtYXQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLm9wdGlvbnMudGl0bGVGb3JtYXQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbGV0IGZvcm1hdHRlZCA9IHRoaXMub3B0aW9ucy50aXRsZUZvcm1hdCh0aXRsZVBlcmNlbnQpO1xuICAgICAgICAgICAgaWYgKGZvcm1hdHRlZCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgdGl0bGUudGV4dHMgPSBbLi4uZm9ybWF0dGVkXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGl0bGUudGV4dHMucHVzaChmb3JtYXR0ZWQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRpdGxlID09PSAnYXV0bycpIHtcbiAgICAgICAgICAgICAgICB0aXRsZS50ZXh0cy5wdXNoKHRpdGxlVGV4dFBlcmNlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRpdGxlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUudGV4dHMgPSBbLi4udGhpcy5vcHRpb25zLnRpdGxlXVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlLnRleHRzLnB1c2godGhpcy5vcHRpb25zLnRpdGxlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBnZXQgc3VidGl0bGUgb2JqZWN0XG4gICAgICAgIGxldCBzdWJ0aXRsZSA9IHtcbiAgICAgICAgICAgIHg6IGNlbnRyZS54LFxuICAgICAgICAgICAgeTogY2VudHJlLnksXG4gICAgICAgICAgICB0ZXh0QW5jaG9yOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLm9wdGlvbnMuc3VidGl0bGVDb2xvcixcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLm9wdGlvbnMuc3VidGl0bGVGb250U2l6ZSxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IHRoaXMub3B0aW9ucy5zdWJ0aXRsZUZvbnRXZWlnaHQsXG4gICAgICAgICAgICB0ZXh0czogW10sXG4gICAgICAgICAgICB0c3BhbnM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgLy8gZnJvbSB2MC45LjksIGJvdGggc3VidGl0bGUgYW5kIHN1YnRpdGxlRm9ybWF0KC4uLikgbWF5IGJlIGFuIGFycmF5IG9mIHN0cmluZy5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdWJ0aXRsZUZvcm1hdCAhPT0gdW5kZWZpbmVkICYmIHRoaXMub3B0aW9ucy5zdWJ0aXRsZUZvcm1hdC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsZXQgZm9ybWF0dGVkID0gdGhpcy5vcHRpb25zLnN1YnRpdGxlRm9ybWF0KHN1YnRpdGxlUGVyY2VudCk7XG4gICAgICAgICAgICBpZiAoZm9ybWF0dGVkIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZS50ZXh0cyA9IFsuLi5mb3JtYXR0ZWRdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZS50ZXh0cy5wdXNoKGZvcm1hdHRlZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3VidGl0bGUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHN1YnRpdGxlLnRleHRzID0gWy4uLnRoaXMub3B0aW9ucy5zdWJ0aXRsZV1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3VidGl0bGUudGV4dHMucHVzaCh0aGlzLm9wdGlvbnMuc3VidGl0bGUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZ2V0IHVuaXRzIG9iamVjdFxuICAgICAgICBsZXQgdW5pdHMgPSB7XG4gICAgICAgICAgICB0ZXh0OiBgJHt0aGlzLm9wdGlvbnMudW5pdHN9YCxcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLm9wdGlvbnMudW5pdHNGb250U2l6ZSxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IHRoaXMub3B0aW9ucy51bml0c0ZvbnRXZWlnaHQsXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5vcHRpb25zLnVuaXRzQ29sb3JcbiAgICAgICAgfTtcbiAgICAgICAgLy8gZ2V0IHRvdGFsIGNvdW50IG9mIHRleHQgbGluZXMgdG8gYmUgc2hvd25cbiAgICAgICAgbGV0IHJvd0NvdW50ID0gMCwgcm93TnVtID0gMTtcbiAgICAgICAgdGhpcy5vcHRpb25zLnNob3dUaXRsZSAmJiAocm93Q291bnQgKz0gdGl0bGUudGV4dHMubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLnNob3dTdWJ0aXRsZSAmJiAocm93Q291bnQgKz0gc3VidGl0bGUudGV4dHMubGVuZ3RoKTtcbiAgICAgICAgLy8gY2FsYyBkeSBmb3IgZWFjaCB0c3BhbiBmb3IgdGl0bGVcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93VGl0bGUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHNwYW4gb2YgdGl0bGUudGV4dHMpIHtcbiAgICAgICAgICAgICAgICB0aXRsZS50c3BhbnMucHVzaCh7IHNwYW46IHNwYW4sIGR5OiB0aGlzLmdldFJlbGF0aXZlWShyb3dOdW0sIHJvd0NvdW50KSB9KTtcbiAgICAgICAgICAgICAgICByb3dOdW0rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjYWxjIGR5IGZvciBlYWNoIHRzcGFuIGZvciBzdWJ0aXRsZVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dTdWJ0aXRsZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgc3BhbiBvZiBzdWJ0aXRsZS50ZXh0cykge1xuICAgICAgICAgICAgICAgIHN1YnRpdGxlLnRzcGFucy5wdXNoKHsgc3Bhbjogc3BhbiwgZHk6IHRoaXMuZ2V0UmVsYXRpdmVZKHJvd051bSwgcm93Q291bnQpIH0pXG4gICAgICAgICAgICAgICAgcm93TnVtKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY3JlYXRlIElEIGZvciBncmFkaWVudCBlbGVtZW50XG4gICAgICAgIGlmIChudWxsID09PSB0aGlzLl9ncmFkaWVudFVVSUQpIHtcbiAgICAgICAgICAgIHRoaXMuX2dyYWRpZW50VVVJRCA9IHRoaXMudXVpZCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEJyaW5nIGl0IGFsbCB0b2dldGhlclxuICAgICAgICB0aGlzLnN2ZyA9IHtcbiAgICAgICAgICAgIHZpZXdCb3g6IGAwIDAgJHtib3hTaXplfSAke2JveFNpemV9YCxcbiAgICAgICAgICAgIC8vIFNldCBib3RoIHdpZHRoIGFuZCBoZWlnaHQgdG8gJzEwMCUnIGlmIGl0J3MgcmVzcG9uc2l2ZVxuICAgICAgICAgICAgd2lkdGg6IHRoaXMub3B0aW9ucy5yZXNwb25zaXZlID8gJzEwMCUnIDogYm94U2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5vcHRpb25zLnJlc3BvbnNpdmUgPyAnMTAwJScgOiBib3hTaXplLFxuICAgICAgICAgICAgYmFja2dyb3VuZENpcmNsZToge1xuICAgICAgICAgICAgICAgIGN4OiBjZW50cmUueCxcbiAgICAgICAgICAgICAgICBjeTogY2VudHJlLnksXG4gICAgICAgICAgICAgICAgcjogdGhpcy5vcHRpb25zLnJhZGl1cyArIHRoaXMub3B0aW9ucy5vdXRlclN0cm9rZVdpZHRoIC8gMiArIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kUGFkZGluZyxcbiAgICAgICAgICAgICAgICBmaWxsOiB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZE9wYWNpdHksXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZFN0cm9rZSxcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogdGhpcy5vcHRpb25zLmJhY2tncm91bmRTdHJva2VXaWR0aCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICAgICAgLy8gQSByeCByeSB4LWF4aXMtcm90YXRpb24gbGFyZ2UtYXJjLWZsYWcgc3dlZXAtZmxhZyB4IHkgKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL1NWRy9UdXRvcmlhbC9QYXRocyNBcmNzKVxuICAgICAgICAgICAgICAgIGQ6IGBNICR7c3RhcnRQb2ludC54fSAke3N0YXJ0UG9pbnQueX1cbiAgICAgICAgQSAke3RoaXMub3B0aW9ucy5yYWRpdXN9ICR7dGhpcy5vcHRpb25zLnJhZGl1c30gMCAke2xhcmdlQXJjRmxhZ30gJHtzd2VlcEZsYWd9ICR7ZW5kUG9pbnQueH0gJHtlbmRQb2ludC55fWAsXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB0aGlzLm9wdGlvbnMub3V0ZXJTdHJva2VDb2xvcixcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogdGhpcy5vcHRpb25zLm91dGVyU3Ryb2tlV2lkdGgsXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcDogdGhpcy5vcHRpb25zLm91dGVyU3Ryb2tlTGluZWNhcCxcbiAgICAgICAgICAgICAgICBmaWxsOiAnbm9uZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaXJjbGU6IHtcbiAgICAgICAgICAgICAgICBjeDogY2VudHJlLngsXG4gICAgICAgICAgICAgICAgY3k6IGNlbnRyZS55LFxuICAgICAgICAgICAgICAgIHI6IHRoaXMub3B0aW9ucy5yYWRpdXMgLSB0aGlzLm9wdGlvbnMuc3BhY2UgLSB0aGlzLm9wdGlvbnMub3V0ZXJTdHJva2VXaWR0aCAvIDIgLSB0aGlzLm9wdGlvbnMuaW5uZXJTdHJva2VXaWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgZmlsbDogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHN0cm9rZTogdGhpcy5vcHRpb25zLmlubmVyU3Ryb2tlQ29sb3IsXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IHRoaXMub3B0aW9ucy5pbm5lclN0cm9rZVdpZHRoLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHVuaXRzOiB1bml0cyxcbiAgICAgICAgICAgIHN1YnRpdGxlOiBzdWJ0aXRsZSxcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgeDogY2VudHJlLnggLSB0aGlzLm9wdGlvbnMuaW1hZ2VXaWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgeTogY2VudHJlLnkgLSB0aGlzLm9wdGlvbnMuaW1hZ2VIZWlnaHQgLyAyLFxuICAgICAgICAgICAgICAgIHNyYzogdGhpcy5vcHRpb25zLmltYWdlU3JjLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLm9wdGlvbnMuaW1hZ2VXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMub3B0aW9ucy5pbWFnZUhlaWdodCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvdXRlckxpbmVhckdyYWRpZW50OiB7XG4gICAgICAgICAgICAgICAgaWQ6ICdvdXRlci1saW5lYXItJyArIHRoaXMuX2dyYWRpZW50VVVJRCxcbiAgICAgICAgICAgICAgICBjb2xvclN0b3AxOiB0aGlzLm9wdGlvbnMub3V0ZXJTdHJva2VDb2xvcixcbiAgICAgICAgICAgICAgICBjb2xvclN0b3AyOiB0aGlzLm9wdGlvbnMub3V0ZXJTdHJva2VHcmFkaWVudFN0b3BDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyA/ICcjRkZGJyA6IHRoaXMub3B0aW9ucy5vdXRlclN0cm9rZUdyYWRpZW50U3RvcENvbG9yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJhZGlhbEdyYWRpZW50OiB7XG4gICAgICAgICAgICAgICAgaWQ6ICdyYWRpYWwtJyArIHRoaXMuX2dyYWRpZW50VVVJRCxcbiAgICAgICAgICAgICAgICBjb2xvclN0b3AxOiB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgICAgIGNvbG9yU3RvcDI6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kR3JhZGllbnRTdG9wQ29sb3IgPT09ICd0cmFuc3BhcmVudCcgPyAnI0ZGRicgOiB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZEdyYWRpZW50U3RvcENvbG9yLFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgZ2V0QW5pbWF0aW9uUGFyYW1ldGVycyA9IChwcmV2aW91c1BlcmNlbnQ6IG51bWJlciwgY3VycmVudFBlcmNlbnQ6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBNSU5fSU5URVJWQUwgPSAxMDtcbiAgICAgICAgbGV0IHRpbWVzOiBudW1iZXIsIHN0ZXA6IG51bWJlciwgaW50ZXJ2YWw6IG51bWJlcjtcbiAgICAgICAgbGV0IGZyb21QZXJjZW50ID0gdGhpcy5vcHRpb25zLnN0YXJ0RnJvbVplcm8gPyAwIDogKHByZXZpb3VzUGVyY2VudCA8IDAgPyAwIDogcHJldmlvdXNQZXJjZW50KTtcbiAgICAgICAgbGV0IHRvUGVyY2VudCA9IGN1cnJlbnRQZXJjZW50IDwgMCA/IDAgOiB0aGlzLm1pbihjdXJyZW50UGVyY2VudCwgdGhpcy5vcHRpb25zLm1heFBlcmNlbnQpO1xuICAgICAgICBsZXQgZGVsdGEgPSBNYXRoLmFicyhNYXRoLnJvdW5kKHRvUGVyY2VudCAtIGZyb21QZXJjZW50KSk7XG5cbiAgICAgICAgaWYgKGRlbHRhID49IDEwMCkge1xuICAgICAgICAgICAgLy8gd2Ugd2lsbCBmaW5pc2ggYW5pbWF0aW9uIGluIDEwMCB0aW1lc1xuICAgICAgICAgICAgdGltZXMgPSAxMDA7XG4gICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5hbmltYXRlVGl0bGUgJiYgIXRoaXMub3B0aW9ucy5hbmltYXRlU3VidGl0bGUpIHtcbiAgICAgICAgICAgICAgICBzdGVwID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gc2hvdyB0aXRsZSBvciBzdWJ0aXRsZSBhbmltYXRpb24gZXZlbiBpZiB0aGUgYXJjIGlzIGZ1bGwsIHdlIGFsc28gbmVlZCB0byBmaW5pc2ggaXQgaW4gMTAwIHRpbWVzLlxuICAgICAgICAgICAgICAgIHN0ZXAgPSBNYXRoLnJvdW5kKGRlbHRhIC8gdGltZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gd2Ugd2lsbCBmaW5pc2ggaW4gYXMgbWFueSB0aW1lcyBhcyB0aGUgbnVtYmVyIG9mIHBlcmNlbnQuXG4gICAgICAgICAgICB0aW1lcyA9IGRlbHRhO1xuICAgICAgICAgICAgc3RlcCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRoZSBpbnRlcnZhbCBvZiB0aW1lclxuICAgICAgICBpbnRlcnZhbCA9IE1hdGgucm91bmQodGhpcy5vcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uIC8gdGltZXMpO1xuICAgICAgICAvLyBSZWFkanVzdCBhbGwgdmFsdWVzIGlmIHRoZSBpbnRlcnZhbCBvZiB0aW1lciBpcyBleHRyZW1lbHkgc21hbGwuXG4gICAgICAgIGlmIChpbnRlcnZhbCA8IE1JTl9JTlRFUlZBTCkge1xuICAgICAgICAgICAgaW50ZXJ2YWwgPSBNSU5fSU5URVJWQUw7XG4gICAgICAgICAgICB0aW1lcyA9IHRoaXMub3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbiAvIGludGVydmFsO1xuICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuYW5pbWF0ZVRpdGxlICYmICF0aGlzLm9wdGlvbnMuYW5pbWF0ZVN1YnRpdGxlICYmIGRlbHRhID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgc3RlcCA9IE1hdGgucm91bmQoMTAwIC8gdGltZXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGVwID0gTWF0aC5yb3VuZChkZWx0YSAvIHRpbWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBzdGVwIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAuXG4gICAgICAgIGlmIChzdGVwIDwgMSkge1xuICAgICAgICAgICAgc3RlcCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdGltZXM6IHRpbWVzLCBzdGVwOiBzdGVwLCBpbnRlcnZhbDogaW50ZXJ2YWwgfTtcbiAgICB9O1xuICAgIGFuaW1hdGUgPSAocHJldmlvdXNQZXJjZW50OiBudW1iZXIsIGN1cnJlbnRQZXJjZW50OiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVyU3Vic2NyaXB0aW9uICYmICF0aGlzLl90aW1lclN1YnNjcmlwdGlvbi5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3RpbWVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZyb21QZXJjZW50ID0gdGhpcy5vcHRpb25zLnN0YXJ0RnJvbVplcm8gPyAwIDogcHJldmlvdXNQZXJjZW50O1xuICAgICAgICBsZXQgdG9QZXJjZW50ID0gY3VycmVudFBlcmNlbnQ7XG4gICAgICAgIGxldCB7IHN0ZXA6IHN0ZXAsIGludGVydmFsOiBpbnRlcnZhbCB9ID0gdGhpcy5nZXRBbmltYXRpb25QYXJhbWV0ZXJzKGZyb21QZXJjZW50LCB0b1BlcmNlbnQpO1xuICAgICAgICBsZXQgY291bnQgPSBmcm9tUGVyY2VudDtcbiAgICAgICAgaWYgKGZyb21QZXJjZW50IDwgdG9QZXJjZW50KSB7XG4gICAgICAgICAgICB0aGlzLl90aW1lclN1YnNjcmlwdGlvbiA9IHRpbWVyKDAsIGludGVydmFsKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvdW50ICs9IHN0ZXA7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50IDw9IHRvUGVyY2VudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5hbmltYXRlVGl0bGUgJiYgIXRoaXMub3B0aW9ucy5hbmltYXRlU3VidGl0bGUgJiYgY291bnQgPj0gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXcodG9QZXJjZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXcoY291bnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3KHRvUGVyY2VudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl90aW1lclN1YnNjcmlwdGlvbiA9IHRpbWVyKDAsIGludGVydmFsKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvdW50IC09IHN0ZXA7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID49IHRvUGVyY2VudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5hbmltYXRlVGl0bGUgJiYgIXRoaXMub3B0aW9ucy5hbmltYXRlU3VidGl0bGUgJiYgdG9QZXJjZW50ID49IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3KHRvUGVyY2VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90aW1lclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3KGNvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhdyh0b1BlcmNlbnQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90aW1lclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlbWl0Q2xpY2tFdmVudChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlck9uQ2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgwLCB0aGlzLm9wdGlvbnMucGVyY2VudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25DbGljay5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMub25DbGljay5lbWl0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIF90aW1lclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgYXBwbHlPcHRpb25zID0gKCkgPT4ge1xuICAgICAgICAvLyB0aGUgb3B0aW9ucyBvZiA8Y2lyY2xlLXByb2dyZXNzPiBtYXkgY2hhbmdlIGFscmVhZHlcbiAgICAgICAgZm9yIChsZXQgbmFtZSBvZiBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiB0aGlzW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNbbmFtZV0gPSB0aGlzW25hbWVdO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRlbXBsYXRlT3B0aW9ucyAmJiB0aGlzLnRlbXBsYXRlT3B0aW9uc1tuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zW25hbWVdID0gdGhpcy50ZW1wbGF0ZU9wdGlvbnNbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFrZSBzdXJlIGtleSBvcHRpb25zIHZhbGlkXG4gICAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMgPSBNYXRoLmFicygrdGhpcy5vcHRpb25zLnJhZGl1cyk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5zcGFjZSA9ICt0aGlzLm9wdGlvbnMuc3BhY2U7XG4gICAgICAgIHRoaXMub3B0aW9ucy5wZXJjZW50ID0gK3RoaXMub3B0aW9ucy5wZXJjZW50ID4gMCA/ICt0aGlzLm9wdGlvbnMucGVyY2VudCA6IDA7XG4gICAgICAgIHRoaXMub3B0aW9ucy5tYXhQZXJjZW50ID0gTWF0aC5hYnMoK3RoaXMub3B0aW9ucy5tYXhQZXJjZW50KTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uID0gTWF0aC5hYnModGhpcy5vcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLm91dGVyU3Ryb2tlV2lkdGggPSBNYXRoLmFicygrdGhpcy5vcHRpb25zLm91dGVyU3Ryb2tlV2lkdGgpO1xuICAgICAgICB0aGlzLm9wdGlvbnMuaW5uZXJTdHJva2VXaWR0aCA9IE1hdGguYWJzKCt0aGlzLm9wdGlvbnMuaW5uZXJTdHJva2VXaWR0aCk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kUGFkZGluZyA9ICt0aGlzLm9wdGlvbnMuYmFja2dyb3VuZFBhZGRpbmc7XG4gICAgfTtcbiAgICBwcml2YXRlIGdldFJlbGF0aXZlWSA9IChyb3dOdW06IG51bWJlciwgcm93Q291bnQ6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gICAgICAgIC8vIHdoeSAnLTAuMThlbSc/IEl0J3MgYSBtYWdpYyBudW1iZXIgd2hlbiBwcm9wZXJ0eSAnYWxpZ25tZW50LWJhc2VsaW5lJyBlcXVhbHMgJ2Jhc2VsaW5lJy4gOilcbiAgICAgICAgbGV0IGluaXRpYWxPZmZzZXQgPSAtMC4xOCwgb2Zmc2V0ID0gMTtcbiAgICAgICAgcmV0dXJuIChpbml0aWFsT2Zmc2V0ICsgb2Zmc2V0ICogKHJvd051bSAtIHJvd0NvdW50IC8gMikpLnRvRml4ZWQoMikgKyAnZW0nO1xuICAgIH07XG5cbiAgICBwcml2YXRlIG1pbiA9IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gYSA8IGIgPyBhIDogYjtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBtYXggPSAoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIGEgPiBiID8gYSA6IGI7XG4gICAgfTtcblxuICAgIHByaXZhdGUgdXVpZCA9ICgpID0+IHtcbiAgICAgICAgLy8gaHR0cHM6Ly93d3cudzNyZXNvdXJjZS5jb20vamF2YXNjcmlwdC1leGVyY2lzZXMvamF2YXNjcmlwdC1tYXRoLWV4ZXJjaXNlLTIzLnBocFxuICAgICAgICB2YXIgZHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkdCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XG4gICAgICAgICAgICBkdCA9IE1hdGguZmxvb3IoZHQgLyAxNik7XG4gICAgICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGlzRHJhd2luZygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl90aW1lclN1YnNjcmlwdGlvbiAmJiAhdGhpcy5fdGltZXJTdWJzY3JpcHRpb24uY2xvc2VkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmluZFN2Z0VsZW1lbnQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnN2Z0VsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCB0YWdzID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzdmcnKTtcbiAgICAgICAgICAgIGlmICh0YWdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN2Z0VsZW1lbnQgPSB0YWdzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0VsZW1lbnRJblZpZXdwb3J0KGVsKTogQm9vbGVhbiB7XG4gICAgICAgIC8vIFJldHVybiBmYWxzZSBpZiBlbCBoYXMgbm90IGJlZW4gY3JlYXRlZCBpbiBwYWdlLlxuICAgICAgICBpZiAoZWwgPT09IG51bGwgfHwgZWwgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgZWxlbWVudCBpcyBvdXQgb2YgdmlldyBkdWUgdG8gYSBjb250YWluZXIgc2Nyb2xsaW5nXG4gICAgICAgIGxldCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHBhcmVudCA9IGVsLnBhcmVudE5vZGUsIHBhcmVudFJlY3Q7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBpZiAocmVjdC50b3AgPj0gcGFyZW50UmVjdC5ib3R0b20pIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChyZWN0LmJvdHRvbSA8PSBwYXJlbnRSZWN0LnRvcCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKHJlY3QubGVmdCA+PSBwYXJlbnRSZWN0LnJpZ2h0KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAocmVjdC5yaWdodCA8PSBwYXJlbnRSZWN0LmxlZnQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICB9IHdoaWxlIChwYXJlbnQgIT0gdGhpcy5kb2N1bWVudC5ib2R5KTtcbiAgICAgICAgLy8gQ2hlY2sgaXRzIHdpdGhpbiB0aGUgZG9jdW1lbnQgdmlld3BvcnRcbiAgICAgICAgaWYgKHJlY3QudG9wID49ICh0aGlzLndpbmRvdy5pbm5lckhlaWdodCB8fCB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChyZWN0LmJvdHRvbSA8PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChyZWN0LmxlZnQgPj0gKHRoaXMud2luZG93LmlubmVyV2lkdGggfHwgdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChyZWN0LnJpZ2h0IDw9IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY2hlY2tWaWV3cG9ydCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5maW5kU3ZnRWxlbWVudCgpO1xuICAgICAgICBsZXQgcHJldmlvdXNWYWx1ZSA9IHRoaXMuaXNJblZpZXdwb3J0O1xuICAgICAgICB0aGlzLmlzSW5WaWV3cG9ydCA9IHRoaXMuaXNFbGVtZW50SW5WaWV3cG9ydCh0aGlzLnN2Z0VsZW1lbnQpO1xuICAgICAgICBpZiAocHJldmlvdXNWYWx1ZSAhPT0gdGhpcy5pc0luVmlld3BvcnQgJiYgdGhpcy5vblZpZXdwb3J0Q2hhbmdlZC5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5vblZpZXdwb3J0Q2hhbmdlZC5lbWl0KHsgb2xkVmFsdWU6IHByZXZpb3VzVmFsdWUsIG5ld1ZhbHVlOiB0aGlzLmlzSW5WaWV3cG9ydCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TY3JvbGwgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuY2hlY2tWaWV3cG9ydCgpO1xuICAgIH1cblxuICAgIGxvYWRFdmVudHNGb3JMYXp5TW9kZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5sYXp5KSB7XG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XG4gICAgICAgICAgICAgIHRoaXMud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25TY3JvbGwsIHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fdmlld3BvcnRDaGFuZ2VkU3Vic2NyaWJlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZpZXdwb3J0Q2hhbmdlZFN1YnNjcmliZXIgPSB0aGlzLm9uVmlld3BvcnRDaGFuZ2VkLnN1YnNjcmliZSgoeyBvbGRWYWx1ZSwgbmV3VmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA/IHRoaXMucmVuZGVyKCkgOiBudWxsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc3ZnRWxlbWVudCBtdXN0IGJlIGNyZWF0ZWQgaW4gRE9NIGJlZm9yZSBiZWluZyBjaGVja2VkLlxuICAgICAgICAgICAgLy8gSXMgdGhlcmUgYSBiZXR0ZXIgd2F5IHRvIGNoZWNrIHRoZSBleGlzdGVuY2Ugb2Ygc3ZnRWxlbW50P1xuICAgICAgICAgICAgbGV0IF90aW1lciA9IHRpbWVyKDAsIDUwKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ZnRWxlbWVudCA9PT0gbnVsbCA/IHRoaXMuY2hlY2tWaWV3cG9ydCgpIDogX3RpbWVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5sb2FkRXZlbnRzRm9yTGF6eU1vZGUgPSAoKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgdGhpcy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLCB0cnVlKTtcbiAgICAgICAgdGhpcy53aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XG4gICAgICAgIC8vIFVuc3Vic2NyaWJlIG9uVmlld3BvcnRDaGFuZ2VkXG4gICAgICAgIGlmICh0aGlzLl92aWV3cG9ydENoYW5nZWRTdWJzY3JpYmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl92aWV3cG9ydENoYW5nZWRTdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aGlzLl92aWV3cG9ydENoYW5nZWRTdWJzY3JpYmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxvYWRFdmVudHNGb3JMYXp5TW9kZSgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVubG9hZEV2ZW50c0ZvckxhenlNb2RlKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgaWYgKCdsYXp5JyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgICBjaGFuZ2VzLmxhenkuY3VycmVudFZhbHVlID8gdGhpcy5sb2FkRXZlbnRzRm9yTGF6eU1vZGUoKSA6IHRoaXMudW5sb2FkRXZlbnRzRm9yTGF6eU1vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIGRlZmF1bHRPcHRpb25zOiBDaXJjbGVQcm9ncmVzc09wdGlvbnMsXG4gICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcbiAgICAgIGluamVjdG9yOiBJbmplY3RvcixcbiAgICApIHtcbiAgICAgICAgdGhpcy5kb2N1bWVudCA9IGluamVjdG9yLmdldChET0NVTUVOVCk7XG4gICAgICAgIHRoaXMud2luZG93ID0gdGhpcy5kb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIGRlZmF1bHRPcHRpb25zKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRlZmF1bHRPcHRpb25zLCBkZWZhdWx0T3B0aW9ucyk7XG4gICAgfVxuXG59XG4iXX0=