// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { UpdateQuery } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../lib/dbConnection';
import Asset from '../../../models/Asset';
import { ResponseData, StatusCode } from '../../../types';
import { deleteFile } from '../file';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await connectDB();

  const {
    method,
    body,
    query: { id },
  } = req;

  switch (method) {
    case 'GET':
      getAssetById(res, id as string);
      break;
    case 'PUT':
      updateAsset(res, id as string, body);
      break;
    case 'DELETE':
      deleteAsset(res, id as string);
      break;
    default:
      return res
        .status(StatusCode.fail)
        .json({ success: false, error: 'Server failed' });
  }
}

async function getAssetById(
  res: NextApiResponse,
  id: string
) {
  try {
    const asset = await Asset.findById(id);
    return res.status(StatusCode.success).json({ success: true, asset });
  } catch (error) {
    res.status(StatusCode.fail).json({ success: false, error });
  }
}

async function updateAsset(
  res: NextApiResponse,
  id: string,
  body: UpdateQuery<unknown>
) {
  try {
    const asset = await Asset.findByIdAndUpdate(id, body);
    return res.status(StatusCode.success).json({ success: true, asset });
  } catch (error) {
    res.status(StatusCode.fail).json({ success: false, error });
  }
}

async function deleteAsset(res: NextApiResponse, id: string) {
  try {
    const asset = await Asset.findByIdAndDelete(id);
    const filepath = asset.path;
    await deleteFile(filepath);
    return res.status(StatusCode.success).json({ success: true, asset });
  } catch (error) {
    res.status(StatusCode.fail).json({ success: false, error });
  }
}
