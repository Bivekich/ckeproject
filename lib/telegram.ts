import { TELEGRAM_CONFIG } from './config';

export async function sendTelegramNotification(phone: string, source: string) {
  const text = `🔔 Новая заявка!\n\n📱 Телефон: ${phone}\n📍 Источник: ${source}`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CONFIG.CHAT_ID,
          text: text,
          parse_mode: 'HTML',
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to send Telegram notification');
    }

    return true;
  } catch (error) {
    console.error('Error sending Telegram notification:', error);
    return false;
  }
}
