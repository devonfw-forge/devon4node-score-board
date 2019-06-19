import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
  ViewEncapsulation,
  HostListener,
} from '@angular/core';
import * as d3 from 'd3';
import { DataModel } from '../../data/data.model';

@Component({
  selector: 'app-bar-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnChanges {
  @ViewChild('chart', { static: true })
  private chartContainer: ElementRef;

  @Input()
  data: DataModel[];

  margin = { top: 0, right: 20, bottom: 50, left: 0 };

  constructor() {}

  ngOnChanges(): void {
    // console.log(this.chartContainer.nativeElement.offsetHeight);
    if (!this.data) {
      return;
    }

    this.createChart();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.createChart();
  }

  private createChart(): void {
    d3.select('svg').remove();

    const element = this.chartContainer.nativeElement;
    const data = this.data;

    const svg = d3
      .select(element)
      .append('svg')
      .attr('display', 'flex')
      .attr('width', '100%')
      .attr('height', '100%');

    const contentWidth =
      element.offsetWidth - this.margin.left - this.margin.right;
    const contentHeight =
      element.offsetHeight - this.margin.top - this.margin.bottom;

    const x = d3
      .scaleBand()
      .rangeRound([0, contentWidth])
      .padding(0.4)
      .domain(data.map((d) => d.team_name));

    const y = d3
      .scaleLinear()
      .rangeRound([contentHeight, 0])
      .domain([0, d3.max(data, (d) => d.points)]);

    const chart = svg.append('g');
    // .attr(
    //   'transform',
    //   'translate(' + this.margin.left + ',' + this.margin.top + ')',
    // );

    chart
      .append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + contentHeight + ')')
      .call(d3.axisBottom(x));

    chart
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.team_name))
      .attr('y', (d) => y(d.points))
      .attr('width', x.bandwidth())
      .attr('height', (d) => contentHeight - y(d.points))
      .style('fill', (d) => {
        return d.color;
      });

    const barGroups = chart
      .selectAll()
      .data(data)
      .enter()
      .append('g');

    barGroups
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => x(a.team_name) + x.bandwidth() / 2)
      .attr('y', (a) => {
        if (a.points === 0) {
          return y(a.points) - 20;
        } else {
          return y(a.points) + 20;
        }
      })
      .attr('text-anchor', 'middle')
      .text((a) => `${a.points}`);
  }
}
