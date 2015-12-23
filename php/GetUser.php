<?php
function GetBrowser() {
	$browser = "其他";
	//判断是否是myie
	if (strpos(strtolower($_SERVER['HTTP_USER_AGENT']), "myie")) {
		$browser = "myie";
	}

	//判断是否是Netscape
	if (strpos(strtolower($_SERVER['HTTP_USER_AGENT']), "netscape")) {
		$browser = "netscape";
	}

	//判断是否是Opera
	if (strpos(strtolower($_SERVER['HTTP_USER_AGENT']), "opera")) {
		$browser = "opera";
	}

	//判断是否是netcaptor
	if (strpos(strtolower($_SERVER['HTTP_USER_AGENT']), "netcaptor")) {
		$browser = "netCaptor";
	}

	//判断是否是TencentTraveler
	if (strpos(strtolower($_SERVER['HTTP_USER_AGENT']), "tencenttraveler")) {
		$browser = "TencentTraveler";
	}

	//判断是否是Firefox
	if (strpos(strtolower($_SERVER['HTTP_USER_AGENT']), "firefox")) {
		$browser = "Firefox";
	}

	//判断是否是ie
	if (strpos(strtolower($_SERVER['HTTP_USER_AGENT']), "msie")) {
		$browser = "ie";
	}

	//判断是否是chrome内核浏览器
	if (strpos(strtolower($_SERVER['HTTP_USER_AGENT']), "chrome")) {
		$browser = "google";
	}

	return $browser;
}

function get_real_ip() {
	$ip = false;
	if (!empty($_SERVER["HTTP_CLIENT_IP"])) {
		$ip = $_SERVER["HTTP_CLIENT_IP"];
	}
	if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
		$ips = explode(", ", $_SERVER['HTTP_X_FORWARDED_FOR']);
		if ($ip) { array_unshift($ips, $ip);
			$ip = FALSE;
		}
		for ($i = 0; $i < count($ips); $i++) {
			if (!eregi("^(10|172\.16|192\.168)\.", $ips[$i])) {
				$ip = $ips[$i];
				break;
			}
		}
	}
	return ($ip ? $ip : $_SERVER['REMOTE_ADDR']);
}
?>