import * as i0 from '@angular/core';
import { EventEmitter, Component, Output, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import { timer } from 'rxjs';

function CircleProgressComponent__svg_svg_0__svg_linearGradient_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "linearGradient");
        i0.ɵɵelement(1, "stop", 5)(2, "stop", 6);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext(2);
        i0.ɵɵattribute("id", ctx_r1.svg.outerLinearGradient.id);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("stop-color", ctx_r1.svg.outerLinearGradient.colorStop1)("stop-opacity", 1);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("stop-color", ctx_r1.svg.outerLinearGradient.colorStop2)("stop-opacity", 1);
    }
}
function CircleProgressComponent__svg_svg_0__svg_radialGradient_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "radialGradient");
        i0.ɵɵelement(1, "stop", 5)(2, "stop", 6);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext(2);
        i0.ɵɵattribute("id", ctx_r2.svg.radialGradient.id);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("stop-color", ctx_r2.svg.radialGradient.colorStop1)("stop-opacity", 1);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("stop-color", ctx_r2.svg.radialGradient.colorStop2)("stop-opacity", 1);
    }
}
function CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelement(0, "circle");
    }
    if (rf & 2) {
        const ctx_r8 = i0.ɵɵnextContext(3);
        i0.ɵɵattribute("cx", ctx_r8.svg.backgroundCircle.cx)("cy", ctx_r8.svg.backgroundCircle.cy)("r", ctx_r8.svg.backgroundCircle.r)("fill", ctx_r8.svg.backgroundCircle.fill)("fill-opacity", ctx_r8.svg.backgroundCircle.fillOpacity)("stroke", ctx_r8.svg.backgroundCircle.stroke)("stroke-width", ctx_r8.svg.backgroundCircle.strokeWidth);
    }
}
function CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelement(0, "circle");
    }
    if (rf & 2) {
        const ctx_r9 = i0.ɵɵnextContext(3);
        i0.ɵɵattributeInterpolate2("fill", "url(", ctx_r9.window.location.href, "#", ctx_r9.svg.radialGradient.id, ")");
        i0.ɵɵattribute("cx", ctx_r9.svg.backgroundCircle.cx)("cy", ctx_r9.svg.backgroundCircle.cy)("r", ctx_r9.svg.backgroundCircle.r)("fill-opacity", ctx_r9.svg.backgroundCircle.fillOpacity)("stroke", ctx_r9.svg.backgroundCircle.stroke)("stroke-width", ctx_r9.svg.backgroundCircle.strokeWidth);
    }
}
function CircleProgressComponent__svg_svg_0__svg_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_1_Template, 1, 7, "circle", 2);
        i0.ɵɵtemplate(2, CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_2_Template, 1, 8, "circle", 2);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx_r3.options.backgroundGradient);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r3.options.backgroundGradient);
    }
}
function CircleProgressComponent__svg_svg_0__svg_circle_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelement(0, "circle");
    }
    if (rf & 2) {
        const ctx_r4 = i0.ɵɵnextContext(2);
        i0.ɵɵattribute("cx", ctx_r4.svg.circle.cx)("cy", ctx_r4.svg.circle.cy)("r", ctx_r4.svg.circle.r)("fill", ctx_r4.svg.circle.fill)("stroke", ctx_r4.svg.circle.stroke)("stroke-width", ctx_r4.svg.circle.strokeWidth);
    }
}
function CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelement(0, "path");
    }
    if (rf & 2) {
        const ctx_r10 = i0.ɵɵnextContext(3);
        i0.ɵɵattribute("d", ctx_r10.svg.path.d)("stroke", ctx_r10.svg.path.stroke)("stroke-width", ctx_r10.svg.path.strokeWidth)("stroke-linecap", ctx_r10.svg.path.strokeLinecap)("fill", ctx_r10.svg.path.fill);
    }
}
function CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelement(0, "path");
    }
    if (rf & 2) {
        const ctx_r11 = i0.ɵɵnextContext(3);
        i0.ɵɵattributeInterpolate2("stroke", "url(", ctx_r11.window.location.href, "#", ctx_r11.svg.outerLinearGradient.id, ")");
        i0.ɵɵattribute("d", ctx_r11.svg.path.d)("stroke-width", ctx_r11.svg.path.strokeWidth)("stroke-linecap", ctx_r11.svg.path.strokeLinecap)("fill", ctx_r11.svg.path.fill);
    }
}
function CircleProgressComponent__svg_svg_0__svg_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_1_Template, 1, 5, "path", 2);
        i0.ɵɵtemplate(2, CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_2_Template, 1, 6, "path", 2);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r5 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx_r5.options.outerStrokeGradient);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r5.options.outerStrokeGradient);
    }
}
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1__svg_tspan_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "tspan");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const tspan_r16 = ctx.$implicit;
        const ctx_r15 = i0.ɵɵnextContext(4);
        i0.ɵɵattribute("x", ctx_r15.svg.title.x)("y", ctx_r15.svg.title.y)("dy", tspan_r16.dy)("font-size", ctx_r15.svg.title.fontSize)("font-weight", ctx_r15.svg.title.fontWeight)("fill", ctx_r15.svg.title.color);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(tspan_r16.span);
    }
}
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1__svg_tspan_1_Template, 2, 7, "tspan", 8);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r12 = i0.ɵɵnextContext(3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r12.svg.title.tspans);
    }
}
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_tspan_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "tspan");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r13 = i0.ɵɵnextContext(3);
        i0.ɵɵattribute("font-size", ctx_r13.svg.units.fontSize)("font-weight", ctx_r13.svg.units.fontWeight)("fill", ctx_r13.svg.units.color);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r13.svg.units.text);
    }
}
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3__svg_tspan_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "tspan");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const tspan_r18 = ctx.$implicit;
        const ctx_r17 = i0.ɵɵnextContext(4);
        i0.ɵɵattribute("x", ctx_r17.svg.subtitle.x)("y", ctx_r17.svg.subtitle.y)("dy", tspan_r18.dy)("font-size", ctx_r17.svg.subtitle.fontSize)("font-weight", ctx_r17.svg.subtitle.fontWeight)("fill", ctx_r17.svg.subtitle.color);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(tspan_r18.span);
    }
}
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3__svg_tspan_1_Template, 2, 7, "tspan", 8);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r14 = i0.ɵɵnextContext(3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r14.svg.subtitle.tspans);
    }
}
function CircleProgressComponent__svg_svg_0__svg_text_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "text", 7);
        i0.ɵɵtemplate(1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1_Template, 2, 1, "ng-container", 2);
        i0.ɵɵtemplate(2, CircleProgressComponent__svg_svg_0__svg_text_7__svg_tspan_2_Template, 2, 4, "tspan", 2);
        i0.ɵɵtemplate(3, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3_Template, 2, 1, "ng-container", 2);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r6 = i0.ɵɵnextContext(2);
        i0.ɵɵattribute("x", ctx_r6.svg.circle.cx)("y", ctx_r6.svg.circle.cy)("text-anchor", ctx_r6.svg.title.textAnchor);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r6.options.showTitle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r6.options.showUnits);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r6.options.showSubtitle);
    }
}
function CircleProgressComponent__svg_svg_0__svg_image_8_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelement(0, "image", 9);
    }
    if (rf & 2) {
        const ctx_r7 = i0.ɵɵnextContext(2);
        i0.ɵɵattribute("height", ctx_r7.svg.image.height)("width", ctx_r7.svg.image.width)("href", ctx_r7.svg.image.src, null, "xlink")("x", ctx_r7.svg.image.x)("y", ctx_r7.svg.image.y);
    }
}
function CircleProgressComponent__svg_svg_0_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
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
    }
}
class CircleProgressOptions {
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
class CircleProgressComponent {
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
CircleProgressComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CircleProgressComponent, selectors: [["circle-progress"]], inputs: { name: "name", class: "class", backgroundGradient: "backgroundGradient", backgroundColor: "backgroundColor", backgroundGradientStopColor: "backgroundGradientStopColor", backgroundOpacity: "backgroundOpacity", backgroundStroke: "backgroundStroke", backgroundStrokeWidth: "backgroundStrokeWidth", backgroundPadding: "backgroundPadding", radius: "radius", space: "space", percent: "percent", toFixed: "toFixed", maxPercent: "maxPercent", renderOnClick: "renderOnClick", units: "units", unitsFontSize: "unitsFontSize", unitsFontWeight: "unitsFontWeight", unitsColor: "unitsColor", outerStrokeGradient: "outerStrokeGradient", outerStrokeWidth: "outerStrokeWidth", outerStrokeColor: "outerStrokeColor", outerStrokeGradientStopColor: "outerStrokeGradientStopColor", outerStrokeLinecap: "outerStrokeLinecap", innerStrokeColor: "innerStrokeColor", innerStrokeWidth: "innerStrokeWidth", titleFormat: "titleFormat", title: "title", titleColor: "titleColor", titleFontSize: "titleFontSize", titleFontWeight: "titleFontWeight", subtitleFormat: "subtitleFormat", subtitle: "subtitle", subtitleColor: "subtitleColor", subtitleFontSize: "subtitleFontSize", subtitleFontWeight: "subtitleFontWeight", imageSrc: "imageSrc", imageHeight: "imageHeight", imageWidth: "imageWidth", animation: "animation", animateTitle: "animateTitle", animateSubtitle: "animateSubtitle", animationDuration: "animationDuration", showTitle: "showTitle", showSubtitle: "showSubtitle", showUnits: "showUnits", showImage: "showImage", showBackground: "showBackground", showInnerStroke: "showInnerStroke", clockwise: "clockwise", responsive: "responsive", startFromZero: "startFromZero", showZeroOuterStroke: "showZeroOuterStroke", lazy: "lazy", templateOptions: ["options", "templateOptions"] }, outputs: { onClick: "onClick" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid meet", 3, "click", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid meet", 3, "click"], [4, "ngIf"], ["alignment-baseline", "baseline", 4, "ngIf"], ["preserveAspectRatio", "none", 4, "ngIf"], ["offset", "5%"], ["offset", "95%"], ["alignment-baseline", "baseline"], [4, "ngFor", "ngForOf"], ["preserveAspectRatio", "none"]], template: function CircleProgressComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, CircleProgressComponent__svg_svg_0_Template, 9, 11, "svg", 0);
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.svg);
        }
    }, directives: [i1.NgIf, i1.NgForOf], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CircleProgressComponent, [{
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
            }] });
})();

class NgCircleProgressModule {
    static forRoot(options = {}) {
        return {
            ngModule: NgCircleProgressModule,
            providers: [
                { provide: CircleProgressOptions, useValue: options }
            ]
        };
    }
}
NgCircleProgressModule.ɵfac = function NgCircleProgressModule_Factory(t) { return new (t || NgCircleProgressModule)(); };
NgCircleProgressModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgCircleProgressModule });
NgCircleProgressModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgCircleProgressModule, [{
            type: NgModule,
            args: [{
                    declarations: [CircleProgressComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [CircleProgressComponent]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgCircleProgressModule, { declarations: [CircleProgressComponent], imports: [CommonModule], exports: [CircleProgressComponent] }); })();

/*
 * Public API Surface of ng-circle-progress
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CircleProgressComponent, CircleProgressOptions, NgCircleProgressModule };
//# sourceMappingURL=ng-circle-progress.mjs.map
