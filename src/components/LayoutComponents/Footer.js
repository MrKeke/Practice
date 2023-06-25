import style from "./Foote.module.scss";

const Footer = ({ trademark }) => {
	return (
		<footer className={style.footer}>
			<div className={style.item}>
				<div className={style.logo}>
					<img src="/footer/logo.png"></img>
					<h1>Hexlet Pizza</h1>
				</div>
			</div>

			<div className={style.item}>
				<b>Hexlet Pizza</b>
				<a>О компании</a>
				<a>Пользовательское соглашение</a>
				<a>Условия гарантии</a>
			</div>

			<div className={style.item}>
				<b>Помощь</b>
				<a>Ресторан</a>
				<a>Контакты</a>
				<a>Поддержка</a>
				<a>Отследить заказ</a>
			</div>

			<div className={style.item}>
				<b>Контакты</b>
				<a href="tel:+79262231011" className="flex gap-1">
					<div className={style.icon}>
						<img src="footer/phone.png"></img>
					</div>
					<span>+7 (926) 223-10-11</span>
				</a>
				<a href="*" className="flex gap-1">
					<div className={style.icon}>
						<img src="footer/placeSign.png"></img>
					</div>
					<span>Угрешская ул., 14, Москва, 115088</span>
				</a>
				<a className="flex gap-1">
					<div className={style.icon}>
						<img src="footer/facebookLogo.png"></img>
					</div>
					<span>Facebook</span>
				</a>
				<a className="flex gap-1">
					<div className={style.icon}>
						<img src="footer/instagramLogo.png"></img>
					</div>
					<span>Instagram</span>
				</a>
			</div>

			<h1 className={style.trademark}>{trademark}</h1>
		</footer>
	);
};

export default Footer;
