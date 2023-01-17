// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { UpdateQuery } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../lib/dbConnection';
import Asset from '../../../models/Asset';
import { ResponseData, StatusCode } from '../../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await connectDB();

  const { method, body } = req;

  switch (method) {
    case 'GET':
      getAssets(res);
      break;
    case 'POST':
      insertAsset(res, body);
      break;
    default:
      return res
        .status(StatusCode.fail)
        .json({ success: false, error: 'Server failed' });
  }
}

async function getAssets(res: NextApiResponse) {
  try {
    const asset = await Asset.find();
    return res.status(StatusCode.success).json({ success: true, asset });
  } catch (error) {
    res.status(StatusCode.fail).json({ success: false, error });
  }
}

async function insertAsset(
  res: NextApiResponse,
  body: UpdateQuery<unknown>
) {
  try {
    const asset = new Asset(body);
    await asset.save();
    return res.status(StatusCode.success).json({ success: true, asset });
  } catch (error) {
    return res.status(StatusCode.fail).json({ success: false, error });
  }
}
