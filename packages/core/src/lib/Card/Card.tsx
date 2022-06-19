import { color } from '@web3uikit/styles';
import { CardProps } from './types';
import { Checkmark, HelpCircle } from '@web3uikit/icons';
import { Tooltip } from '../Tooltip';
import styles from './Card.styles';
import { Typography } from '../Typography';

const { AbsoluteIconStyled, DivStyled, FooterStyled, HeaderStyled } = styles;

const Card: React.FC<CardProps> = ({
    children,
    cursorType = 'pointer',
    description,
    id,
    isDisabled = false,
    isSelected,
    onClick,
    setIsSelected,
    title,
    tooltipMove,
    tooltipMoveBody,
    tooltipText,
    ...props
}: CardProps) => {
    return (
        <DivStyled
            aria-label={isSelected ? 'card not selected' : 'card selected'}
            data-testid={'card-test-id'}
            id={id}
            onClick={() => {
                if (isDisabled) return;
                onClick && onClick();
                if (!setIsSelected) return;
                setIsSelected(!isSelected);
            }}
            role="button"
            isSelected={isSelected}
            isDisabled={isDisabled}
            cursorType={cursorType}
            {...props}
        >
            <HeaderStyled data-testid={'header-test-id'}>
                {isSelected && (
                    <AbsoluteIconStyled position="topL">
                        <Checkmark
                            data-testid={'check-test-id'}
                            title="checkmark icon"
                            titleId="card checkmark icon"
                            fill={color.green}
                            fontSize={24}
                        />
                    </AbsoluteIconStyled>
                )}
                {!isDisabled && tooltipText && (
                    <AbsoluteIconStyled position="topR">
                        <Tooltip
                            position={'bottom'}
                            children={[
                                <HelpCircle
                                    key="ttip-card"
                                    title="help circle icon"
                                    titleId="card help circle icon"
                                    data-testid={'help-test-id'}
                                    fill={color.blue}
                                    fontSize={22}
                                />,
                            ]}
                            content={tooltipText}
                            move={tooltipMove}
                            moveBody={tooltipMoveBody}
                        />
                    </AbsoluteIconStyled>
                )}
            </HeaderStyled>
            <div>{children}</div>
            {(title || description) && (
                <FooterStyled>
                    {title && (
                        <Typography
                            variant="subtitle2"
                            data-testid={'title-test-id'}
                            color={color.blue}
                        >
                            {title}
                        </Typography>
                    )}
                    {description && (
                        <Typography
                            variant="caption14"
                            data-testid={'desc-test-id'}
                            color={color.blue}
                        >
                            {description}
                        </Typography>
                    )}
                </FooterStyled>
            )}
        </DivStyled>
    );
};
export default Card;