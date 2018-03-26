import { autobind } from 'core-decorators';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';

import TooltipIcon from 'shared/widgets/TooltipIcon';
import CurrencyInput from 'shared/forms/inputs/CurrencyInput';
import SelectRangeInput from 'shared/forms/inputs/SelectRangeInput';

/**
 * Bonus component description.
 *
 * BonusYear function takes as an input array with years, bonuses and displays it and average bonus.
 * Bonuses and year in the select are editable by the user.
 *
 * Default case:
 * select: current year, input: current year - 1, input: current year - 2
 * bonuses are '0'
 *
 **/

const propTypes = {
        title: PropTypes.string,
        averageTitle: PropTypes.string,
        tooltipContent: PropTypes.any,
        bonuses: PropTypes.array,
        handleYearChange: PropTypes.func
    },
    defaultProps = {
        bonuses: []
    };

export default class BonusInput extends Component {
    constructor(props) {
        super();
        this.duration = 8;
        this.currentYear = new Date().getFullYear();
        this.lastCountYear = this.currentYear - this.duration;
    }

    componentWillMount() {
        const initialBonusesValues = [
            {
                'bonus': 1,
                'year': this.currentYear
            },
            {
                'bonus': 0,
                'year': this.currentYear - 1
            },
            {
                'bonus': 0,
                'year': this.currentYear - 2
            }
        ];

        if (isEmpty(this.props.bonuses)) {
            this.setState({bonuses: initialBonusesValues});
        } else {
            this.setState({bonuses: this.props.bonuses});
        }
    }

    @autobind
    handleYearChange(yearValue) {
        this.setState({
            'bonuses': this.state.bonuses.map((bonus, index) => {
                bonus.year = yearValue - index;
                return bonus;
            })
        });
    }

    getAverageBonus = (averageBonus = 0) => {
        let length = this.state.bonuses.length;
        if (length > 0) {
            averageBonus = parseInt(this.state.bonuses.reduce((acc, bonus) => {
                return bonus.bonus + acc;
            }, 0) / length);
        } else {
            averageBonus = 0;
        }
        return averageBonus;
    }

    render() {
        const {title, averageTitle, tooltipContent} = this.props;

        return (
            <div className="bonus">
                <div className="form-header">
                    <header className="sub-title">{title}</header>
                    <TooltipIcon
                        tooltipContent={tooltipContent}
                    />
                </div>

                <Row>
                    {
                        this.state.bonuses.map((bonus, index) => (
                            <Col xs={12} md={4} key={index}>
                                {index === 0 ? <SelectRangeInput name="year" value={bonus.year} onChange={this.handleYearChange} rangeStart={this.currentYear} rangeEnd={this.lastCountYear} />
                                    : <span className="year">{bonus.year}</span>
                                }
                                <CurrencyInput
                                    name="bonus"
                                    prefix="CHF"
                                    value={bonus.bonus}
                                />
                            </Col>
                        ))
                    }
                </Row>

                <Row>
                    <Col xs={12} md={4}>
                        {averageTitle}
                    </Col>
                    <Col xs={12} md={4}>
                        <span>CHF</span>
                        <CurrencyInput
                            prefix="CHF"
                            readOnly={true}
                            value={this.getAverageBonus()}
                            displayType="text"
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

BonusInput.propTypes = propTypes;
BonusInput.defaultProps = defaultProps;
